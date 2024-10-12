import { Typography } from "@material-tailwind/react"

function Error(){
    return(
        <>

        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Page non trovée
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Erreur 404 : La page que vous cherchez n’existe pas
              </Typography>
            </div>
          </div>
        </div>
        </div>
        
        </>
    )
}

export default Error