import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/supportedByStyle.js";

import innovate from "assets/img/logos/innovate-dic-nominee.svg";
import gma from "assets/img/logos/gma-logo.svg";

const useStyles = makeStyles(styles);

export default function AwardNominationsSection() {
    const classes = useStyles();
    return (
        <div>
            <h4 className={classes.title}>Award Nominations</h4>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://innovate-os.de/awards/">
                                <img
                                    src={innovate}
                                    alt="innovate! Digital Innovation Challenge Nominee"
                                    className={classes.logo}
                                    style={{ maxWidth: "200px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.germanmedicalaward.com/">
                                <img
                                    src={gma}
                                    alt="German Medical Award 2020 Nominee"
                                    className={classes.logo}
                                    style={{ maxWidth: "200px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
