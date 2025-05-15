import { MouseContext } from '@/context/mouseContext'
import routes from '@/routes'
import CustomCursor from '@/widgets/cursor/Cursor'
import { Footer, Navbar } from '@/widgets/layout'
import { Typography } from '@material-tailwind/react'
import { useContext } from 'react'

function Error() {
  let { textEnter, textEnter2, textLeave, textLeave2 } = useContext(MouseContext)
  return (
    <>
      <CustomCursor />
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Page non trovée
              </Typography>
              <Typography
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                variant="lead"
                color="white"
                className="opacity-80"
              >
                Erreur 404 : La page que vous cherchez n'existe pas ou n'existe plus.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Error
