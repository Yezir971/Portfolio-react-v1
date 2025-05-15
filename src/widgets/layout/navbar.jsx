import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react'
import { logoData, teamData } from '@/data'
import { MouseContext } from '@/context/mouseContext'

export function Navbar({ routes, action }) {
  const [openNav, setOpenNav] = React.useState(false)
  let { textEnter, textLeave } = useContext(MouseContext)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="capitalize gap-1 p-1 font-bold cursor-pointer">
        <a href="https://james-ahmedaly.com/#a-propos">À propos</a>
      </li>
      <li className="capitalize gap-1 p-1 font-bold cursor-pointer">
        <a href="https://james-ahmedaly.com/#monParcours">Parcours</a>
      </li>
      <li className="capitalize gap-1 p-1 font-bold cursor-pointer">
        <a href="https://james-ahmedaly.com/#projets">Projets</a>
      </li>
    </ul>
  )

  return (
    <MTNavbar color="transparent" className="p-6">
      <div className="container mx-auto flex items-center justify-between text-white">
        <a href="https://james-ahmedaly.com">
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="mr-4 ml-2 cursor-pointer py-1.5"
            src={logoData[0].imgSrc}
            alt="Logo James Ahmedaly"
          />
        </a>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hidden lg:block "
        >
          {navList}
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hidden gap-2 lg:flex"
        >
          <a
            href={teamData[0].cv}
            target="_blank"
            className="mb-2 block cursor-pointer"
          >
            <Button
              variant="text"
              className="text-white cursor-pointer"
              size="sm"
              fullWidth
            >
              Mon CV
            </Button>
          </a>
          {React.cloneElement(action, {
            className: 'hidden lg:inline-block',
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto cursor-pointer text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <div
            className={classNames(`tham tham-e-slider tham-w-6`, {
              'tham-active': openNav,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner bg-white" />
            </div>
          </div>
        </IconButton>
      </div>
      <Collapse
        className={`rounded-xl bg-white px-2 ${
          openNav == true && 'pt-2 pb-4'
        } text-blue-gray-900`}
        open={openNav}
      >
        <div className="container text-center flex flex-col justify-center items-center mx-auto">
          {navList}
          <a href={teamData[0].cv} target="_blank" className="mb-2 block ">
            <Button
              className="cursor-pointer"
              variant="text"
              size="sm"
              fullWidth
            >
              Mon CV
            </Button>
          </a>
          {React.cloneElement(action, {
            className: 'w-full block',
          })}
        </div>
      </Collapse>
    </MTNavbar>
  )
}

Navbar.defaultProps = {
  action: (
    <a href="/#meContacter">
      <Button variant="gradient" size="sm" className="cursor-pointer" fullWidth>
        Me contacter
      </Button>
    </a>
  ),
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
}

Navbar.displayName = '/src/widgets/layout/navbar.jsx'

export default Navbar
