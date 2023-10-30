import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Proptypes from "prop-types";

const IconBtn = ({ icon, ...props }) => {
  return (
    <button {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

IconBtn.propTypes = {
  icon: Proptypes.object,
};

export default IconBtn;
