import { auth } from '@/firebase-config'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function PrivateHome() {
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      alert(`Un problème bloque la déconnexion : ${error.message}`)
    }
  }

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>



              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-2xl"
              >
                james_ahmedaly.com
              </th>
              <td className="px-6 py-4 max-w-2xl">james</td>
              <td className="px-6 py-4 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsa incidunt a enim at consequuntur quo accusamus tenetur impedit, sequi modi nobis quod veniam quis eos, debitis necessitatibus, ipsum quidem optio sit libero. Molestiae error, doloremque neque cumque suscipit eos ducimus incidunt natus illum ad cum dolorum id placeat aliquid repellat quod maxime hic distinctio quo perspiciatis. Ea dolorem suscipit explicabo amet iste corrupti eaque sapiente esse nesciunt ad, odit itaque quibusdam omnis totam, ratione quasi numquam ab, aliquam nihil blanditiis debitis non. Temporibus ullam enim odit ipsa, minima nam tenetur libero maiores adipisci cum perferendis recusandae est iste! Nulla sed quaerat reiciendis. Voluptatum sapiente atque enim, qui in cupiditate. Magnam at nesciunt dolor qui vitae numquam esse possimus rerum cupiditate nam odio velit et, laborum nemo cum voluptatum commodi reiciendis facilis perferendis! Alias doloribus maiores aliquid fuga labore accusamus ullam ex iste, cum eum amet aut qui nulla quas vitae voluptatum dolor debitis error in, veniam nostrum harum. Vel mollitia, perspiciatis sunt alias itaque error nemo exercitationem pariatur totam inventore delectus ducimus soluta perferendis, quo et dolorem dolore nulla qui fugit. Quaerat, animi enim quam ullam tempora eius doloremque vero. Maiores fugiat sapiente inventore provident quod officiis eum dolorum reprehenderit quae voluptatem voluptatum est maxime totam error sequi ea nam ipsum deleniti, odio, voluptate dolore sunt veritatis officia. Rerum eaque maxime corporis rem voluptas omnis voluptatibus sunt, iste obcaecati at, quo repellat optio provident. Accusamus recusandae dignissimos reprehenderit in inventore eaque sunt doloremque saepe labore enim dolores numquam fugit ad delectus nostrum repudiandae nulla autem atque repellendus minus debitis cumque, esse perferendis. Magnam exercitationem aspernatur reprehenderit animi? Magni ratione placeat nemo distinctio vitae eos. Possimus accusantium ex itaque aut commodi explicabo officiis, quidem laudantium sit, laborum tempora, quas cum quod? Saepe, veritatis iusto eveniet doloremque amet quia impedit quas suscipit assumenda perspiciatis corporis pariatur minus eligendi quo a repudiandae sit. Rerum odio exercitationem corporis quam ad dicta quidem alias quos ullam, nam minima quis explicabo iure sunt debitis delectus placeat fugit error eligendi modi! Eius sint repudiandae cupiditate reprehenderit optio vero dolores aperiam iusto. Quia aliquid hic, autem aut quas id voluptates cumque vitae quidem inventore mollitia blanditiis necessitatibus quibusdam ducimus quisquam neque corrupti sint sequi dolorum? Nobis doloremque illum enim quo aliquam recusandae nulla, quas, maxime sapiente error sequi rerum debitis facere. Quibusdam, perspiciatis corporis vel repellendus maiores architecto cum eius, a odio nobis ipsa fugit repellat, sequi doloremque autem temporibus! Mollitia assumenda provident sint suscipit repellat libero officiis consequuntur nobis aliquam in cumque ab, eveniet numquam similique voluptas dolorum exercitationem labore voluptate, quae iste rem fugit? Error, dolore animi repellendus odio nesciunt magnam officiis repellat fugiat, ipsam earum, magni reiciendis incidunt totam non porro esse nisi quae! Modi, rerum corrupti! A ex nam modi doloribus. Temporibus amet reiciendis ipsam quod sed totam? Quisquam doloribus ab et quam minus neque non necessitatibus nulla enim. Eligendi quas dolorem quaerat maxime voluptatem in nihil eaque. Quaerat, accusamus dolore. Suscipit placeat explicabo perferendis, quia facere illo recusandae? Saepe iste iusto facere!</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  supprimer
                </a>
              </td>
              
            </tr>




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
