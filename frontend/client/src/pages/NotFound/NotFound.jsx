import Typewriter from "typewriter-effect";
import "./NotFound.css";
// import TopBar from "../../components/TopBar/TopBar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      {/* <TopBar /> */}
      <NavBar />
      <div
        className="flex items-center justify-center"
        style={{ height: "80vh" }}
      >
        <div className="flex flex-col gap-12">
          <div className="animate-box">
            <h4 className="not-found-title">404</h4>
          </div>
          <div className="text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("صفحه مورد نظر پیدا نشد !")
                  .start()
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("لطفا دوباره تلاش کنید...")
                  .start()
                  .pauseFor(2000);
              }}
              options={{
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
