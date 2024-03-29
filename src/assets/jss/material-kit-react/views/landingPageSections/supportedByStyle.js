import { title } from "assets/jss/material-kit-react.js";

const teamStyle = {
  title: {
    ...title,
    marginBottom: 0,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    padding: "1.5rem",
    paddingBottom: "0.5rem",

    "@media (max-width: 768px)": {
      paddingBottom: "2rem"
    }
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: "2rem",

    "@media (max-width: 768px)": {
      paddingTop: "1rem"
    }
  },
  logo: {
    maxHeight: "100px",
    minWidth: "100px",
    maxWidth: "250px"
  },
  logoSeparator: {
    width: "90%",
    height: "50px",
    marginTop: "25px",
    borderTop: "1px solid #cfcfcf"
  },
  existContainer: {
    flexBasis: "20% !important",

    "& img": {
      minWidth: "50px",
    }
  }
};

export default teamStyle;
