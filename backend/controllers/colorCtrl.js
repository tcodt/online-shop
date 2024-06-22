import { customError } from "../middlewares/errorHandler.js";
import { colorModel, productModel } from "../models/index.js";
import asynHandler from "express-async-handler";
export const createColor = asynHandler(async (req, res) => {
  const { color, codeColor, price, total, discount, postId, endDiscount } =
    req.body;
  try {
    const totalPrice = price - discount;
    const data = await colorModel.create({
      color,
      codeColor,
      price,
      total,
      discount,
      postId,
      endDiscount,
      totalPrice,
    });
    const product = await productModel.findByPk(postId, {
      attributes: ["id", "price", "isUpdate", "off", "total"],
    });
    if (product.price > totalPrice || !product.price) {
      if (discount) {
        product.isUpdate = true;
        product.off = endDiscount;
      } else {
        product.isUpdate = false;
        product.off = null;
      }
      product.price = totalPrice;
    }
    product.total = Number(product.total) + Number(total);
    await product.save();
    res.send({ data });
  } catch (err) {
    throw customError(err, 401);
  }
});
export const updateColor = asynHandler(async (req, res) => {
  const { id } = req.params;
  const { color, codeColor, price, total, discount, endDiscount } = req.body;
  try {
    const data = await colorModel.findByPk(id, {
      include: [{ model: productModel, attributes: ["id"] }],
    });
    if (color) {
      data.color = color;
    }
    if (codeColor) {
      data.codeColor = codeColor;
    }
    if (price) {
      data.price = price;
    }
    if (discount) {
      data.discount = discount;
    }
    const totalPrice = price - discount;
    data.totalPrice = totalPrice;
    data.endDiscount = endDiscount || null;
    const product = await productModel.findByPk(data.product.id, {
      attributes: ["id", "price", "isUpdate", "off", "total"],
      include: [{ model: colorModel, order: [["totalPrice", "ASC"]] }],
    });
    const newPrice = product.colors.map((i) => {
      if (Number(i.id) === Number(id)) {
        i.totalPrice = totalPrice;
        i.endDiscount = endDiscount || data.endDiscount;
      }
      return i;
    });
    let minTotalPrice = newPrice.reduce((min, item) => {
      return item?.totalPrice < min?.totalPrice ? item : min;
    }, newPrice[0]);
    if (minTotalPrice.endDiscount) {
      product.isUpdate = true;
      product.off = minTotalPrice.endDiscount;
    } else {
      product.isUpdate = false;
      product.off = null;
    }
    product.price = minTotalPrice.totalPrice;
    product.total = Number(product.total) - Number(data.total) + Number(total);
    if (total) {
      data.total = total;
    }
    await product.save();
    await data.save();
    res.send({ success: true });
  } catch (err) {
    throw customError(err, 401);
  }
});
export const deleteColor = asynHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await colorModel.findByPk(id, {
      include: [{ model: productModel, attributes: ["id"] }],
    });
    if (!data) {
      res.status(404).send({ success: false });
    }
    const product = await productModel.findByPk(data.product.id, {
      attributes: ["id", "price", "isUpdate", "off", "total"],
      include: [
        { model: colorModel, order: [["totalPrice", "ASC"]], limit: 2 },
      ],
    });
    if (product.colors.length === 1) {
      product.price = 0;
      product.isUpdate = false;
      product.off = null;
      product.total = 0;
      await data.destroy();
      await product.save();
      res.send({ success: "true" });
      return;
    }
    if (product.price === data.totalPrice || product.price > data.totalPrice) {
      const newPrice = product.colors.find((i) => i.id !== data.id);
      product.price = newPrice?.dataValues?.totalPrice;
      if (newPrice?.dataValues?.endDiscount) {
        product.isUpdate = true;
        product.off = newPrice?.dataValues?.endDiscount;
      } else {
        product.isUpdate = false;
      }
      product.total = Number(product.total) - Number(data.total);
      await product.save();
      await data.destroy();
    }
    res.send({ success: "true" });
  } catch (err) {
    throw customError(err);
  }
});
