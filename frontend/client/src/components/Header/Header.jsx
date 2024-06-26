// import TopBar from "../TopBar/TopBar";
// import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";

import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <header className="flex-none flex-col">
      {/* <TopBar /> */}
      {/* <NavBar /> */}
      <Menu />
      <Landing />
    </header>
  );
}
