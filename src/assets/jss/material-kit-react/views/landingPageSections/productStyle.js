import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 45px",
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
  description: {
    color: "#999"
  },
  marginBottom: {
    marginBottom: "25px"
  }
};

export default productStyle;
