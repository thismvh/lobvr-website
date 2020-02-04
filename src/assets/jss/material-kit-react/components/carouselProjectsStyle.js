import { container } from "assets/jss/material-kit-react.js";

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  matchPadding: {
    paddingRight: "5px",
    paddingLeft: "5px",
    "& .slick-slide.slick-active.slick-current:before": {
      position: "absolute",
      content: "",
      background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
      opacity: 0.5,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1
    }
  },
  carouselImg: {
    width: "100% !important",
    display: "inline-flex !important",
  },
};

export default carouselStyle;
