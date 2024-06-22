import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const IdentityLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <Outlet />
      </div>
    </>
  );
};

export default IdentityLayout;
