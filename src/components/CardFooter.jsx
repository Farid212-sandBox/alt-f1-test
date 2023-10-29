import { Row, Col } from "react-bootstrap";
import {
  faArrowUpRightFromSquare as externalLink,
  faCheck as check,
  faTrashCan as trash,
  faDatabase as db,
  faBell as bell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const CardFooter = ({ url, ...props }) => {
  const listIcons = [
    {
      icon: externalLink,
      link: url,
      style: {
        color: "white",
        backgroundColor: "#1c84c6",
        borderColor: "#1c84c6",
        borderRadius: "3px",
      },
    },
    {
      icon: check,
      style: {
        color: "white",
        backgroundColor: "#1ab394",
        borderColor: "#1ab394",
        borderRadius: "3px",
      },
    },
    {
      icon: trash,
      style: {
        color: "white",
        backgroundColor: "#ed5565",
        borderColor: "#ed5565",
        borderRadius: "3px",
      },
    },
    {
      icon: bell,
      style: {
        color: "gray",
        backgroundColor: "white",
        border: "1px solid #e7eaec",
        borderRadius: "3px",
      },
    },
    {
      icon: null,
    },
    {
      icon: db,
      style: {
        color: "gray",
        backgroundColor: "white",
        border: "1px solid #e7eaec",
        borderRadius: "3px",
      },
    },
  ];
  return (
    <Row style={{ marginTop: "15px" }} {...props}>
      {listIcons.map((el, i) => (
        <Col
          xs={2}
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {el.icon && (
            <span style={{ padding: ".375rem .75rem", ...el.style }}>
              <FontAwesomeIcon icon={el.icon} />
            </span>
          )}
        </Col>
      ))}
    </Row>
  );
};

CardFooter.propTypes = {
  url: PropTypes.string,
};

export default CardFooter;
