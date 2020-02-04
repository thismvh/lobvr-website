import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const projectsStyle = {
  container,
  section: {
    padding: "0 45px",
    textAlign: "center",
    "@media (max-width: 575px)": {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  profile: {
    textAlign: "center",
  },
  description: {
    textAlign: "center !important",
    color: "#999",
    margin: "0 auto",
    fontSize: "17px",
    marginTop: "40px",
    paddingLeft: "5px",
    paddingRight: "5px",
    lineHeight: "1.85",
    "@media (min-width: 960px)": {
        width: "75%"
    }
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    marginTop: 0,
    marginBottom: 0,
    display: "inline-block",
    position: "relative",
    textDecoration: "none"
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
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default projectsStyle;
