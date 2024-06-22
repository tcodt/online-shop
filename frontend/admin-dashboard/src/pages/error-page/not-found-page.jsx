const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <span className="text-5xl text-gray-800 font-bold">404</span>
        <h3 className="text-2xl text-gray-700 font-bold">
          صفحه مورد نظر پیدا نشد !
        </h3>
        <p className="text-base text-gray-500 font-semibold">
          لطفا دوباره تلاش کنید
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
