import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import AOS  from "aos";
import 'aos/dist/aos.css'
export function TeamCard({ img, name, position, socials }) {
  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <Card color="transparent"  shadow={false} className="text-center items-center">
        
        <div data-aos="zoom-in-up" >
        <Avatar         
          src={img}
          alt={name}
          size="xxl"
          variant="rounded"
          className="w-52 h-52"
        />
      </div>
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
