import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Slide from "@material-ui/core/Slide";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function RoadmapSection() {
    const classes = useStyles();
    return (
        <div id="roadmap" className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Roadmap</h2>
                    <h4 className={classes.description}>
                        Follow us on our journey
                    </h4>


                </GridItem>
            </GridContainer>
        </div>
    );
}
