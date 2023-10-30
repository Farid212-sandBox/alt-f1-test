import { Box, Grid } from "@mui/material";
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
    <Grid container spacing={1} {...props}>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="span"
          style={{
            padding: ".375rem .75rem",
            color: "white",
            backgroundColor: "#1c84c6",
            borderColor: "#1c84c6",
            borderRadius: "3px",
          }}
          onClick={() => window.open(url)}
        >
          <FontAwesomeIcon icon={externalLink} />
        </Box>
      </Grid>
      {listIcons.map((el, i) => (
        <Grid
          item
          xs={2}
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {el.icon && (
            <Box
              component="span"
              style={{ padding: ".375rem .75rem", ...el.style }}
            >
              <FontAwesomeIcon icon={el.icon} />
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

CardFooter.propTypes = {
  url: PropTypes.string,
};

export default CardFooter;
