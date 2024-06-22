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
        <div className="absolute top-4 right-8 bg-white p-2 rounded-lg shadow-md flex items-center gap-4 w-2/4 md:w-1/5">
          <button
            onClick={() => setIsLogginMode(true)}
            className="bg-sky-500 hover:bg-sky-600 transition p-1 rounded-lg text-white flex-1 flex items-center justify-center gap-2"
          >
            {/* {isLogginMode ? "ثبت نام" : "ورود"} */}
            <PiUserDuotone className="text-xl" />
            ورود
          </button>
          <button
            onClick={() => setIsLogginMode(false)}
            className="bg-sky-500 hover:bg-sky-600 transition p-1 rounded-lg text-white flex-1 flex items-center justify-center gap-2"
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
