import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { MouseContext } from '@/context/mouseContext'
import { useContext } from 'react'

export function FeatureCard({ color, icon, title, description }) {
  let { textEnter, textEnter2, textLeave, textLeave2 } =
    useContext(MouseContext)
  return (
    <Card className="rounded-lg shadow-lg">
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="cursor-none mb-6 rounded-full"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave2}
        >
          <i
            className={icon}  
          ></i>
        </IconButton>
        <Typography
          onMouseEnter={textEnter}
          onMouseLeave={textLeave2}
          variant="h5"
          className="mb-2"
          color="black"
        >
          {title}
        </Typography>
        <Typography
          onMouseEnter={textEnter}
          onMouseLeave={textLeave2}
          className="font-normal text-black"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  )
}

FeatureCard.defaultProps = {
  color: 'blue',
}

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    'blue-gray',
    'gray',
    'brown',
    'deep-orange',
    'orange',
    'amber',
    'yellow',
    'lime',
    'light-green',
    'green',
    'teal',
    'cyan',
    'light-blue',
    'blue',
    'indigo',
    'deep-purple',
    'purple',
    'pink',
    'red',
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
}

FeatureCard.displayName = '/src/widgets/layout/feature-card.jsx'

export default FeatureCard
