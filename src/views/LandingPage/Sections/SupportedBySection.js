import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/supportedByStyle.js";

import coppenrath from "assets/img/logos/abc-stiftung.svg";
import seedhouse from "assets/img/logos/seedhouse.svg";
import uni from "assets/img/logos/uni-osnabrueck.svg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
    const classes = useStyles();
    return (
        <div>
            <h4 className={classes.title}>Supported By</h4>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://stiftungcoppenrath.de/">
                                <img
                                    src={coppenrath}
                                    alt="Aloys und Brigitte Coppenrath Stiftung"
                                    className={classes.logo}
                                    style={{ maxWidth: "200px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.uni-osnabrueck.de/startseite/">
                                <img
                                    src={uni}
                                    alt="University of Osnabrück"
                                    className={classes.logo}
                                    style={{ maxWidth: "175px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.seedhouse.de/">
                                <img
                                    src={seedhouse}
                                    alt="Seedhouse Digital Startup Accelerator"
                                    className={classes.logo}
                                />
                            </a>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
