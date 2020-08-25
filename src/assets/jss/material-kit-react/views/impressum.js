import { container, title } from "assets/jss/material-kit-react.js";

const impressumStyle = {
  container: {
    zIndex: "12",
    color: "inherit",
    ...container,
    "@media (max-width: 575px)": {
      paddingRight: "30px",
      paddingLeft: "30px",
    },
  },
  paddingTop: {
    paddingTop: "7%"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: 0,
    minHeight: "32px",
    color: "inherit",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  impressumRoot: {
    color: "#000000 !important",
    background: "#FFFFFF !important",
    "& h1": {
      "@media (max-width: 425px)": {
        fontSize: "2.5rem"
      }
    },
    "& h2": {
      "@media (max-width: 425px)": {
        fontSize: "1.75rem"
      }
    },
    "& h4": {
      "@media (max-width: 425px)": {
        fontSize: "1rem"
      }
    }
  }
};

export default impressumStyle;
