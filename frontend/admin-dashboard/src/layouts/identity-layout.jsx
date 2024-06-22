import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <>
      <div className="w-[200px] bg-sky-500">
        <div>sidebar</div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <Outlet />
      </div>
    </>
  );
};

export default IdentityLayout;
