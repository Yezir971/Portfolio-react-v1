import { MouseContext } from '@/context/mouseContext'
import CustomCursor from '@/widgets/cursor/Cursor'
import { Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataProjet } from '@/data'
import { Footer, Navbar } from '@/widgets/layout'
import routes from '@/routes'
import { UserContext } from '@/context/userContext'
const Description = () => {
  let { textEnter, textEnter2, textLeave, textLeave2 } =
    useContext(MouseContext)
  let { id } = useParams()
  let navigate = useNavigate()
  let { setPasseClick } = useContext(UserContext)
  
  const returnHome = () => {
    setPasseClick(true)
    navigate('https://james-ahmedaly.com/#projets')
  }
  console.log(id)
  return (
    <>
      <CustomCursor />
      <div className="container bg-black absolute left-2/4 top-4 z-10 mx-auto -translate-x-2/4  ">
      <i                   
        onMouseEnter={textEnter}
        onMouseLeave={textLeave} 
        onClick={returnHome} 
        className="cursor-pointer fa-solid fa-left-long text-white text-3xl " 
      />

      </div>
      <div className="relative flex h-80 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0  h-80 w-full bg-black bg-cover bg-center flex justify-center items-center">
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
                  {dataProjet[id].titleProjet}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mb-3" onMouseEnter={textLeave2} onMouseLeave={textLeave}>
        {/* <section className="bg-white rounded-xl shadow-md p-6 container mx-auto"> */}

        <div className="container mx-auto pt-5 w-80">
          <a href={dataProjet[id].pictureProjet}>
            <img
              onMouseEnter={textEnter}
              onMouseLeave={textLeave2}
              className="rounded-xl"
              src={dataProjet[id].pictureProjet}
              alt={dataProjet[id].altPicture}
            />
          </a>
        </div>

        <section className="bg-white rounded-xl p-8 shadow-md mt-10 container mx-auto">
          <Typography
            variant="h2"
            color="black"
            className="mb-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
          >
            Description
          </Typography>
          <p
            className="leading-relaxed"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
          >
            {dataProjet[id].longDescriptionProjet}
          </p>
        </section>

        {/* Technologies utilisées */}
        <section className="bg-white rounded-xl p-8 shadow-md mt-10 container mx-auto">
          <Typography
            variant="h2"
            color="black"
            className="mb-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
          >
            Technologies utilisées
          </Typography>
          <div className="flex gap-3">
            {dataProjet[id].tech.map((element, key) => (
              <div
                className="inline-block bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
                key={key}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave2}
              >
                {element}
              </div>
            ))}
          </div>
        </section>

        {/* Ce que j’ai appris */}
        <section className="bg-white rounded-xl p-8 shadow-md mt-10 mb-5 container mx-auto">
          <Typography
            variant="h2"
            color="black"
            className="mb-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
          >
            Ce que j’ai appris
          </Typography>

          <p
            className="leading-relaxed mb-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
          >
            {dataProjet[id].longDescriptionProjet}
          </p>
          <div className="flex flex-wrap gap-3">
            {dataProjet[id].pictureDescription.map((element, key) => (
              <img
                key={key}
                className="w-56"
                src={element}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave2}
              />
            ))}
          </div>
          <div className="flex mt-4 w-full gap-4 mx-auto">
            <a
              href={dataProjet[id].depotGit}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave2}
              target="_blank"
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-gray-600'
            >
              Github
            </a>
            <a
              href={dataProjet[id].linkProjet}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave2}
              target="_blank"
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-gray-600'

            >
              Voir le projet
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
export default Description
