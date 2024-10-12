import { auth, database } from '@/firebase-config'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useEffect, useState } from 'react'

function PrivateHome() {
  const navigate = useNavigate()
  const [messageListe, setMessageListe] = useState()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      alert(`Un problème bloque la déconnexion : ${error.message}`)
    }
  }
  useEffect(() => {
    const messageRef = ref(database, 'Messages')
    const unsubscribe = onValue(messageRef, (snapshot) => {
      if (snapshot.exists()) {
        const messageArray = Object.entries(snapshot.val()).map(
          ([id, data]) => ({
            id,
            ...data,
          }),
        )
        setMessageListe(messageArray)
      } else {
        console.log('Aucune data a été récupérée !')
      }
    })

    return () => unsubscribe() // Clean up the listener on component unmount, merci chatgpt pour la ligne 100, sans elle mon code marche pas <3
  }, [])
  // messageListe.map((mess) => console.log(mess))

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1>Back office</h1>
      <p onClick={logOut}>
        Page private home, clique ici pour te déconnecter !
      </p>

      <p>message formulaire de contact</p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {messageListe && messageListe.length > 0 ? (
              messageListe.map((element) => (
                <tr
                  key={element.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${element.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${element.id}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {element.mail}
                  </th>
                  <td className="px-6 py-4">{element.name}</td>
                  <td className="px-6 py-4">{element.message}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      supprimer
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <td>loading...</td>
              </>
            )}

            {/* Other rows */}
          </tbody>
        </table>

        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{' '}
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {/* Pagination buttons */}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default PrivateHome
