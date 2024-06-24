import { useState } from "react";
import Login from "../features/identity/components/login";
import Register from "../features/identity/components/register";
import { PiUserDuotone, PiUserPlusDuotone } from "react-icons/pi";

const IdentityLayout = () => {
  const [isLogginMode, setIsLogginMode] = useState(true);

  // const toggleMode = () => {
  //   setIsLogginMode((prevMode) => !prevMode);
  // };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="absolute top-2 right-2 p-2 rounded-lg flex items-center gap-4 w-[70%] md:w-[30%]">
          <button
            onClick={() => setIsLogginMode(true)}
            className="text-gray-600  hover:text-sky-500 flex items-center justify-center gap-2 border-e-2 border-slate-300 pe-4"
          >
            {/* {isLogginMode ? "ثبت نام" : "ورود"} */}
            <PiUserDuotone className="text-xl" />
            ورود
          </button>
          <button
            onClick={() => setIsLogginMode(false)}
            className="text-gray-600 hover:text-sky-500 flex items-center justify-center gap-2"
          >
            <PiUserPlusDuotone className="text-xl" />
            ثبت نام
          </button>
        </div>
        {isLogginMode ? <Login /> : <Register />}
      </div>
    </>
  );
};

export default IdentityLayout;
