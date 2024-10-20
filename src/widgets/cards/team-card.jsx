import PropTypes from 'prop-types'
import { Card, Avatar, Typography } from '@material-tailwind/react'
import { useContext, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MouseContext } from '@/context/mouseContext'
export function TeamCard({ img, name, position, socials }) {
  let { textEnter, textLeave2 } = useContext(MouseContext)
  useEffect(() => {
    AOS.init({})
  }, [])
  
  return (
    <Card
      color="transparent"
      shadow={false}
      className="text-center items-center"
    >
      <div data-aos="zoom-in-up">
        <Avatar
          onMouseEnter={textEnter}
          onMouseLeave={textLeave2}
          src={img}
          alt={name}
          size="xxl"
          variant="rounded"
          className="w-52 h-52"
        />
      </div>
      <Typography
        onMouseEnter={textEnter}
        onMouseLeave={textLeave2}
        variant="h5"
        color="blue-gray"
        className="mt-6 mb-1"
      >
        {name}
      </Typography>
      {position && (
        <Typography
          onMouseEnter={textEnter}
          onMouseLeave={textLeave2}
          className="font-bold text-blue-gray-500"
        >
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  )
}

TeamCard.defaultProps = {
  position: '',
  socials: null,
}

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
}

TeamCard.displayName = '/src/widgets/layout/team-card.jsx'

export default TeamCard
