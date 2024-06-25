/* eslint-disable react/prop-types */

export default function Input(props) {
  const { type, placeholder, className, register, element, name } = props;

  const inputElement =
    element === "phoneInput" ? (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className}`}
        {...register(name, {
          required: true,
          minLength: 11,
          maxLength: 11,

          validate: (value) =>
            value.trim() !== "" &&
            !value.includes(" ") &&
            /^09\d{9}$/.test(value),
        })}
      />
    ) : element === "nameInput" ? (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className}`}
        {...register(name, {
          required: true,
          minLength: 4,
          maxLength: 20,
          validate: (value) =>
            value.trim() !== "" &&
            (value.split(" ").length <= 3 || value.trim().length === 0),
        })}
      />
    ) : element === "passwordInput" ? (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className}`}
        {...register(name, {
          required: true,
          minLength: 8,
          maxLength: 18,
          validate: (value) => value.trim() !== "" && !value.includes(" "),
        })}
      />
    ) : element === "emailInput" ? (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className}`}
        {...register(name, {
          required: true,
          minLength: 8,
          maxLength: 35,
          validate: (value) =>
            value.trim() !== "" &&
            !value.includes(" ") &&
            /^[^\s@]+@[gmail]+\.[com]+$/.test(value),
        })}
      />
    ) : (
      <textarea placeholder={placeholder} className={className} />
    );

  return <div>{inputElement}</div>;
}
