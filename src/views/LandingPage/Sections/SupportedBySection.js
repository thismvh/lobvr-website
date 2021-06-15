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
import exist from "assets/img/logos/exist/exist.svg";
import esf from "assets/img/logos/exist/esf.svg";
import zusammen from "assets/img/logos/exist/zusammen.svg";
import eu from "assets/img/logos/exist/eu.svg";
import bmwi from "assets/img/logos/exist/bmwi.svg";
import fhi from "assets/img/logos/fhi.svg";

const useStyles = makeStyles(styles);

export default function SupportedBySection() {
    const classes = useStyles();
    return (
        <div>
            <h4 className={classes.title}>Supported By</h4>
            <div>
                <GridContainer justify="center">
                <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.exist.de">
                                <img
                                    src={exist}
                                    alt="EXIST Gründerstipendium"
                                    className={classes.logo}
                                    style={{ maxWidth: "85px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.esf.de">
                                <img
                                    src={esf}
                                    alt="Europäischer Sozialfonds für Deutschland (ESF)"
                                    className={classes.logo}
                                    style={{ maxWidth: "85px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.esf.de/portal/DE/Foerderperiode-2014-2020/inhalt.html">
                                <img
                                    src={zusammen}
                                    alt="Zusammen Zukunft Gestalten"
                                    className={classes.logo}
                                    style={{ maxWidth: "85px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://europa.eu/european-union/index_en">
                                <img
                                    src={eu}
                                    alt="Europäische Union"
                                    className={classes.logo}
                                    style={{ maxHeight: "65px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.bmwi.de/">
                                <img
                                    src={bmwi}
                                    alt="Bundesministerium für Wirtschaft und Energie"
                                    className={classes.logo}
                                    style={{ maxHeight: "85px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} className={classes.logoSeparator} />
                    <GridItem xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.logoContainer}>
                            <a href="https://stiftungcoppenrath.de/">
                                <img
                                    src={coppenrath}
                                    alt="Aloys und Brigitte Coppenrath Stiftung"
                                    className={classes.logo}
                                    style={{ maxWidth: "175px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.uni-osnabrueck.de/startseite/">
                                <img
                                    src={uni}
                                    alt="University of Osnabrück"
                                    className={classes.logo}
                                    style={{ maxWidth: "150px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.seedhouse.de/">
                                <img
                                    src={seedhouse}
                                    alt="Seedhouse Digital Startup Accelerator"
                                    className={classes.logo}
                                    style={{ maxHeight: "75px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.fhi-hannover.de">
                                <img
                                    src={fhi}
                                    alt="Female Health Incubator"
                                    className={classes.logo}
                                    style={{ maxWidth: "125px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
