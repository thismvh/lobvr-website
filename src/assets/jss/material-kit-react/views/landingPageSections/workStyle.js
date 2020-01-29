import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
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
    marginBottom: "50px",
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
  }
};

export default workStyle;
