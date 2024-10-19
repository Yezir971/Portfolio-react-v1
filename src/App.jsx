import { Routes, Route, useLocation } from 'react-router-dom'
import { Footer, Navbar } from '@/widgets/layout'
import routes from '@/routes'
import Private from './pages/private/Private'
import PrivateHome from './pages/private/kingdom/PrivateHome'

function App() {
  const { pathname } = useLocation()

  return (
    <>
      {/* {!(pathname == '/private/kingdom-Back') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )} */}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} path={path} element={element} />,
        )}
        <Route path="/private" element={<Private />}>
          <Route path="/private/kingdom-Back" element={<PrivateHome />} />
        </Route>
      </Routes>

      {/* {!(pathname == '/private/kingdom-Back') && (
        <div className="bg-white">
          <Footer />
        </div>
      )} */}
    </>
  )
}

export default App
