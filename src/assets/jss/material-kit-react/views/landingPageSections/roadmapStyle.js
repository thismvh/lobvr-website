import { title } from "assets/jss/material-kit-react.js";

const roadmapStyle = theme => ({
  section: {
    padding: "70px 45px",
    paddingTop: "0",
    paddingBottom: "35px",
    "@media (max-width: 575px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 0
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
});

export default roadmapStyle;
