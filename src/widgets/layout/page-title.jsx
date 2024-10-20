import PropTypes from 'prop-types'
import { Typography } from '@material-tailwind/react'
import { MouseContext } from '@/context/mouseContext'
import { useContext } from 'react'

export function PageTitle({ heading, children }) {
  let { textEnter, textLeave2 } = useContext(MouseContext)
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      {/* <Typography
        onMouseEnter={textEnter2}
        onMouseLeave={textLeave2}
        variant="lead"
        className="font-semibold"
      >
        {section}
      </Typography> */}
      <Typography
        onMouseEnter={textEnter}
        onMouseLeave={textLeave2}
        variant="h2"
        className="my-3"
      >
        {heading}
      </Typography>
      <Typography
        onMouseEnter={textEnter}
        onMouseLeave={textLeave2}
        variant="lead"
        className="text-blue-gray-500"
      >
        {children}
      </Typography>
    </div>
  )
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

PageTitle.displayName = '/src/widgets/layout/page-title.jsx'

export default PageTitle
