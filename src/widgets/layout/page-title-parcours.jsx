import PropTypes from 'prop-types'
import { Typography } from '@material-tailwind/react'
import { MouseContext } from '@/context/mouseContext'
import { useContext } from 'react'

function PageTitleParcours({ section, children }) {
    let {  textEnter, textLeave2 } =
    useContext(MouseContext)
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography
        onMouseEnter={textEnter}
        onMouseLeave={textLeave2}
        variant="lead"
        className="font-semibold"
      >
        {section}
      </Typography>
      <Typography
        onMouseEnter={textEnter}
        onMouseLeave={textLeave2}
        variant="h2"
        color="blue-gray"
        className="my-3"
      >
        {children}
      </Typography>
    </div>
  )
}
PageTitleParcours.propTypes = {
  section: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

PageTitleParcours.displayName = '/src/widgets/layout/page-title-parcours.jsx'

export default PageTitleParcours
