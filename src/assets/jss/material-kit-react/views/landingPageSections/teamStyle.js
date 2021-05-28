import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "0 45px",
    paddingBottom: "35px",
    textAlign: "center",
    "@media (max-width: 575px)": {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999",
    fontWeight: 500
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  linkedIn: {
    transition: "color 0.4s ease",
    "&:hover": {
      color: "#0A66C2" // LinkedIn brand color
    }
  },
  margin5: {
    margin: "5px"
  },
  noYPadding: {
    paddingTop: 0,
    paddingBottom: 0
  },
  teamToggle: {
    ...title,

    "&.active+[class*='extendedTeam']": {
        opacity: 1,
        maxHeight: "100%"
    },

    "& > svg": {
      height: 45,
      width: 45,
      marginTop: "-10px",
      transition: "all ease-in-out 0.4s",
      transitionDelay: "0.2s",

      "&:hover": {
        marginTop: 0
      }
    },

    "&.active > svg:hover": {
      marginTop: "20px",
      transform: "rotate(180deg)",
      transitionDelay: "0.2s",
    }
    
  },
  extendedTeam: {
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "all ease-in-out 0.6s"
  }
};

export default teamStyle;
