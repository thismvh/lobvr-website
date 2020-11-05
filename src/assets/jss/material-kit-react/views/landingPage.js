import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
    "@media (max-width: 575px)": {
      paddingRight: "30px",
      paddingLeft: "30px",
    },
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
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
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 425px)": {
      margin: "30px 30px 0"
    }
  },
  landingRoot: {
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
  },
  partnerBanner: {
    background: "#FFFFFF",
    marginTop: "-3vw",
    marginBottom: "100px",
  },
  awardBanner: {
    background: "#FFFFFF",
    marginTop: 0
  }
};

export default landingPageStyle;
