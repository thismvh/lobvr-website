import { title } from "assets/jss/material-kit-react.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";

const contactUsStyle = {
  section: {
    padding: "70px 45px",
    paddingTop: "0",
    "@media (max-width: 575px)": {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  sendMessageContainer: {
    marginRight: 0,
    marginLeft: 0
  },
  ...modalStyle
};

export default contactUsStyle;
