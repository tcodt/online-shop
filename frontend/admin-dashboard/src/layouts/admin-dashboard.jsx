import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const adminName = useSelector((state) => state.userInfoReducer.name);

  return (
    <>
      <div>
        <h1>{adminName} عزیز به داشبورد ادمین خوش آمدید</h1>
      </div>
    </>
  );
};

export default AdminDashboard;
