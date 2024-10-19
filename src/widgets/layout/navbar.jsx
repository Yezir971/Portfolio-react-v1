import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { logoData, teamData } from "@/data"
// let {  textEnter,  textLeave } =
// useContext(MouseContext)


export function Navbar({ routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="capitalize gap-1 p-1 font-bold cursor-none"><a href="https://james-ahmedaly.com/#a-propos">À propos</a></li>
      <li className="capitalize gap-1 p-1 font-bold cursor-none"><a href="https://james-ahmedaly.com/#monParcours">Parcours</a></li>
      <li className="capitalize gap-1 p-1 font-bold cursor-none"><a href="https://james-ahmedaly.com/#projets">Projets</a></li>
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-6">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <img className="mr-4 ml-2  py-1.5" src={logoData[0].imgSrc} alt="Logo James Ahmedaly" />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
        <a
            href={teamData[0].cv}
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" className="text-white cursor-none" size="sm" fullWidth>
              Mon CV
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto cursor-none text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <div className={classNames(`tham tham-e-slider tham-w-6`, { 'tham-active': openNav })}>
            <div className="tham-box">
              <div className="tham-inner bg-white" />
            </div>
          </div>
        </IconButton>
      </div>
      <Collapse
         
        className={`rounded-xl bg-white px-2 ${openNav == true && "pt-2 pb-4" } text-blue-gray-900`}
        open={openNav}
      >
        <div className="container text-center flex flex-col justify-center items-center mx-auto">
          {navList}
          <a
            href={teamData[0].cv}
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              Mon CV
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  action: (
    <a
      href="/#meContacter"
    >
      <Button variant="gradient" size="sm"  className="cursor-none"fullWidth>
        Me contacter
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
