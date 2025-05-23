import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from '@material-tailwind/react'
import { Footer, Navbar, PageTitle } from '@/widgets/layout'
import { FeatureCard, TeamCard } from '@/widgets/cards'
import {
  featuresData,
  teamData,
  parcoursData,
  experiencData,
  dataProjet,
} from '@/data'
import PageTitleParcours from '@/widgets/layout/page-title-parcours'
import { push, ref, set } from 'firebase/database'
import { database } from '@/firebase-config'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Loader } from '@/widgets/Loader'
import { UserContext } from '@/context/userContext'
import routes from '@/routes'
import styled, { keyframes } from 'styled-components'
import CustomCursor from '@/widgets/cursor/Cursor'
import { MouseContext } from '@/context/mouseContext'

const fadeIn = keyframes`
  from {
    opacity: 0.5;
    background:black;
  }
  to {
    opacity: 1;
    background:black;

  }
`

const Page = styled.div`
  // opacity: 0.5;
  transition:1s
  animation: ${fadeIn} 2s 0.1s forwards; /* Animation pour faire apparaitre la page */
`

export function Home() {
  let formRef = useRef()
  let { passeClick } = useContext(UserContext)
  let { textEnter, textEnter2, textLeave, textLeave2 } =
    useContext(MouseContext)

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailPattern.test(email)
  }
  const validateInput = (name) => {
    if (name.trim() == '') {
      console.log(name.trim())
      return true
    }
    return false
  }
  useEffect(() => {
    if (!passeClick) {
      // Désactiver le scroll pendant le chargement
      document.body.style.overflow = 'hidden'
    } else {
      // Réactiver le scroll quand le chargement est terminé
      document.body.style.overflow = 'auto'
    }

    return () => {
      // Réactiver le scroll si le composant est démonté
      document.body.style.overflow = 'auto'
    }
  }, [passeClick])

  const sendMessageToBdd = async (e) => {
    e.preventDefault()
    // console.log(nameRef)
    let name = formRef.current[0].value
    let mail = formRef.current[1].value
    let message = formRef.current[2].value
    console.log(name)
    console.log(mail)
    console.log(message)
    if (
      validateInput(formRef.current[0].value) ||
      validateInput(formRef.current[1].value) ||
      validateInput(formRef.current[2].value)
    ) {
      return toast.error('Vous avez oublié de remplir un des champs !', {
        containerId: 'error',
        position: 'bottom-right',
      })
    }
    if (!validateEmail(mail)) {
      return toast.error(
        'Votre mail n\'est pas du type "example@example.com"',
        {
          containerId: 'error',
          position: 'bottom-right',
        },
      )
    }
    try {
      const messageRef = ref(database, 'Messages')

      const newMessageRef = push(messageRef)
      set(newMessageRef, {
        name: name,
        mail: mail,
        message: message,
        id_message: Date.now(),
        dateSend: Date.now(),
      })
      formRef.current[0].value = ''
      formRef.current[1].value = ''
      formRef.current[2].value = ''
      toast.success('Votre message a bien été envoyé !', {
        containerId: 'succes',
        position: 'bottom-right',
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  return (
    <>
      <CustomCursor />
      <Loader />
      <Page>
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
          <div className="absolute top-0  h-full w-full bg-black bg-cover bg-center" />
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
                  Ahmedaly James / Développeur Web
                </Typography>
                {/* <Typography
                  variant="lead"
                  color="white"
                  className="opacity-80"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Salut, je m’appelle James et Je suis Développeur Web
                </Typography> */}
              </div>
            </div>
          </div>
        </div>

        <main onMouseEnter={textLeave2} onMouseLeave={textLeave}>
          <section className="-mt-40 bg-white px-4 pb-20 pt-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuresData.map(({ color, title, icon, description }) => (
                  <FeatureCard
                    onMouseEnter={textEnter}
                    key={title}
                    color={color}
                    title={title}
                    icon={icon}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="px-4 pt-20 pb-20 bg-white">
            <div
              id="a-propos"
              data-aos="fade-down"
              className="container mx-auto"
            >
              <PageTitle heading="Qui suis je ?">
                Passionné par la création de sites web modernes et intuitifs, je
                maîtrise HTML, CSS, JavaScript et des librairies comme React.
                Curieux et motivé, j'aime relever des défis techniques et
                collaborer sur des projets innovants. Je suis actuellement à la
                recherche d’une alternance, je serais ravi de rejoindre votre
                équipe.
              </PageTitle>
              <div data-aos="fade-down" className="mt-24 ">
                {teamData.map(({ img, name, position, socials }) => (
                  <TeamCard
                    key={name}
                    img={img}
                    name={name}
                    position={position}
                    socials={
                      <div className="flex items-center gap-2">
                        {socials.map(({ color, name, lien }) => (
                          <IconButton key={name} color={color} variant="text">
                            <a
                              href={lien}
                              onMouseEnter={textEnter}
                              onMouseLeave={textLeave2}
                              target="_blank"
                            >
                              <i
                                className={`cursor-pointer fa-brands text-xl fa-${name}`}
                              />
                            </a>
                          </IconButton>
                        ))}
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            id="monParcours"
            className="container mx-auto relative bg-white pb-20 pt-20 px-4"
          >
            <PageTitleParcours>
              Un aperçu rapide de mon parcours
            </PageTitleParcours>
            <div
              id="monParcours"
              className="container mt-24   grid grid-cols-1 md:grid-cols-2 col-span-2 "
            >
              <div>
                <h3
                  className="text-center uppercase text-xl font-medium my-10"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave2}
                >
                  Scolaire
                </h3>

                <ol
                  data-aos="zoom-in-up"
                  className="relative border-s border-gray-200 dark:border-gray-700"
                >
                  {parcoursData.map((element, index) => (
                    <li className="mb-10 ms-4" key={index}>
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <div className="flex items-center font-normal">
                        <time
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="mb-1 text-sm font-normal leading-none text-red-400 dark:text-gray-500"
                        >
                          {element.date}
                        </time>
                      </div>
                      <div className="flex items-center font-normal">
                        <h3
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="font-semibold text-gray-900 dark:text-white text-2xl"
                        >
                          {element.titreDiplome}
                        </h3>
                      </div>
                      <div className="flex items-center font-normal">
                        <p
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400"
                        >
                          {element.descriptionDiplome}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave2}
                  className="text-center uppercase text-xl font-medium my-10"
                >
                  Professionnel
                </h3>
                <ol
                  data-aos="zoom-in-up"
                  className="relative border-s border-gray-200 dark:border-gray-700"
                >
                  {experiencData.map((element, index) => (
                    <li className="mb-10 ms-4" key={index}>
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <div className="flex items-center font-normal">
                        <time
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="mb-1 text-sm font-normal leading-none text-red-400 dark:text-gray-500"
                        >
                          {element.date}
                        </time>
                      </div>
                      <div className="flex items-center font-normal">
                        <h3
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="text-2xl font-semibold text-gray-900 dark:text-white"
                        >
                          {element.titreDiplome}
                        </h3>
                      </div>
                      <div className="flex items-center font-normal">
                        <p
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave2}
                          className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400"
                        >
                          {element.descriptionDiplome}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
          <section
            id="projets"
            className="container mx-auto flex flex-col justify-center items-center relative bg-white pb-20 pt-20 px-4"
          >
            <PageTitleParcours>
              Quelques-unes de mes réalisations
            </PageTitleParcours>
            <div className="flex mt-24  flex-wrap justify-center items-end gap-14">
              {dataProjet.map((projet, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a target="_blank" href={projet.linkProjet}>
                    <img
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave2}
                      src={projet.pictureProjet}
                      className="rounded-t-lg"
                      alt={projet.altPicture}
                    />
                  </a>
                  <div className="p-5">
                    <a target="_blank" href={projet.linkProjet}>
                      <h5
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave2}
                        className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                      >
                        {projet.titleProjet}
                      </h5>
                    </a>
                    <p
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave2}
                      className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    >
                      {projet.descriptionProjet}
                    </p>
                    <div className="flex justify-between">
                      <a
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave2}
                        target="_blank"
                        href={projet.linkProjet}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-gray-600"
                      >
                        Voir le projet
                      </a>
                      <a
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave2}
                        target="_blank"
                        href={projet.depotGit}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-gray-600"
                      >
                        Voir le dépôt git
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="meContacter" className=" pb-20 pt-20 px-4 bg-white">
            <div className="container mx-auto ">
              <PageTitle heading="Intéressé par mon profil ?">
                Remplissez ce formulaire et je vous répondrai dans les 24
                heures.
              </PageTitle>
              <form ref={formRef} className="mx-auto w-full mt-12 lg:w-5/12">
                <div className="mb-8 flex flex-wrap gap-8">
                  <Input name="nom" variant="outlined" size="lg" label="Nom" />
                  <Input
                    name="email"
                    variant="outlined"
                    size="lg"
                    label="Address Email"
                  />
                </div>
                <Textarea
                  name="message"
                  variant="outlined"
                  size="lg"
                  label="Message"
                  rows={8}
                />

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="mt-8"
                  fullWidth
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave2}
                  onClick={sendMessageToBdd}
                >
                  Envoyer
                </Button>
              </form>
            </div>
          </section>

          <ToastContainer containerId="error" />
          <ToastContainer containerId="succes" />

          <Footer />
        </main>
      </Page>
    </>
  )
}

export default Home
