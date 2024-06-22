// import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";

export default function Header() {
  return (
    <header className="flex flex-col">
      {/* <TopBar /> */}
      <NavBar />
      <Landing />
    </header>
  );
}
