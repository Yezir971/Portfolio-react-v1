import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

function PageTitleParcours({ section, children  }){
    return(
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <Typography variant="lead" className="font-semibold">{section}</Typography>
            <Typography variant="h2" color="blue-gray" className="my-3">
                {children}
            </Typography>
        </div>
    )
}
PageTitleParcours.propTypes = {
    section: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

PageTitleParcours.displayName = "/src/widgets/layout/page-title-parcours.jsx";


export default PageTitleParcours