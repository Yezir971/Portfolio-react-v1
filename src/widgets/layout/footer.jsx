import PropTypes from 'prop-types'
import { Typography, IconButton } from '@material-tailwind/react'
import { logoData } from '@/data'
import { MouseContext } from '@/context/mouseContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

export function Footer({ socials, menus, copyright }) {
  let { textEnter, textEnter2, textLeave2, textLeave } =
    useContext(MouseContext)
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto bg-white">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography
              onMouseEnter={textEnter}
              onMouseLeave={textLeave2}
              className="font-bold "
            >
              James Ahmedaly
            </Typography>
            <Link to="/" href="https://james-ahmedaly.com">
              <img
                onMouseEnter={textEnter}
                onMouseLeave={textLeave2}
                className="mx-auto"
                src={logoData[0].imgSrc}
                alt="logo Ahmedaly James"
              />
            </Link>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave2}
                  rel="noopener noreferrer"
                >
                  <IconButton
                    color="white"
                    className="rounded-full shadow-none bg-transparent"
                  >
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }, menuIndex) => (
              <div key={`${name}-${menuIndex}`}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave2}
                >
                  {name}
                </Typography>
                <ul className="mt-3 ">
                  {items.map((item, itemIndex) => (
                    <li key={`${item.name}-${itemIndex}`}>
                      {name === 'Me contacter' ? (
                        <Typography
                          as="p"
                          rel="noreferrer"
                          variant="small"
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="mb-2 block font-normal text-black"
                        >
                          {item.name}
                        </Typography>
                      ) : (
                        <Typography
                          as="a"
                          href={item.path}
                          target="_blank"
                          rel="noreferrer"
                          variant="small"
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="mb-2 block font-normal text-black"
                        >
                          {item.name}
                        </Typography>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
              onMouseEnter={textEnter2}
              onMouseLeave={textLeave2}
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  title: 'Ahmedaly James',
  description:
    'Easy to use React components for Tailwind CSS and Material Design.',
  socials: [
    {
      color: 'gray',
      name: 'linkedin',
      path: 'https://www.linkedin.com/in/james-ahmedaly-7523092a5/',
    },
    {
      color: 'black',
      name: 'github',
      path: 'https://github.com/Yezir971',
    },
  ],
  menus: [
    {
      name: 'Liens utiles',
      items: [
        {
          name: 'Github',
          path: 'https://github.com/Yezir971',
        },
        {
          name: 'Linkedin',
          path: 'https://www.linkedin.com/in/james-ahmedaly-7523092a5/',
        },
      ],
    },
    {
      name: 'Me contacter',
      items: [
        {
          name: 'E-mail : james_ahmedaly@yahoo.com',
        },
      ],
    },
  ],
  copyright: (
    <>
      &copy; Tous droits réservés voir{' '}
      <a
        href="/mentions_legales"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        mentions légales
      </a>{' '}
      |{' '}
      <a
        href="/politique_confidentialite"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Politique de confidentialité
      </a>{' '}
      | {year}{' '}
      <a
        href="https://github.com/Yezir971"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Ahmedaly James
      </a>
      .
    </>
  ),
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
}

Footer.displayName = '/src/widgets/layout/footer.jsx'

export default Footer
