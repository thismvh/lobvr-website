import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/supportedByStyle.js";

import hasepost from "assets/img/logos/press/hasepost.svg";
import goettinger from "assets/img/logos/press/goettinger.svg";
import noz from "assets/img/logos/press/noz.svg";
import wfo from "assets/img/logos/press/wfo.svg";
import wirksam from "assets/img/logos/press/wirksam.svg";


const useStyles = makeStyles(styles);

export default function SupportedBySection() {
    const classes = useStyles();
    return (
        <div>
            <h4 className={classes.title}>Known from</h4>
            <div>
                <GridContainer justify="center">
                <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.noz.de/lokales/osnabrueck/artikel/2326378/start-up-und-ameos-klinikum-entwickeln-therapie-mit-vr-brille">
                                <img
                                    src={noz}
                                    alt="NOZ - Neue Osnabrücker Zeitung"
                                    className={classes.logo}
                                    style={{ minWidth: "70px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.hasepost.de/virtual-reality-in-der-psychotherapie-aloys-brigitte-coppenrath-stiftung-foerdert-osnabruecker-startup-lobvr-254075/">
                                <img
                                    src={hasepost}
                                    alt="Hasepost"
                                    className={classes.logo}
                                    style={{ maxWidth: "175px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.wfo.de/aktuelles/ib/news/im-virtuellen-raum/">
                                <img
                                    src={wfo}
                                    alt="WFO - Wirtschaftsförderung Osnabrueck"
                                    className={classes.logo}
                                    style={{ maxHeight: "30px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="http://wirksam.online/">
                                <img
                                    src={wirksam}
                                    alt="WIRKSAM, Das Magazin zur Pflege"
                                    className={classes.logo}
                                    style={{ maxWidth: "150px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                    <GridItem className={classes.existContainer} xs={12} sm={6} md={4} lg={4}>
                        <div className={classes.logoContainer}>
                            <a href="https://www.goettinger-tageblatt.de/Nachrichten/Wirtschaft/Regional/Start-up-will-virtuell-Suechte-und-Aengste-aufloesen-helfen">
                                <img
                                    src={goettinger}
                                    alt="Goettinger Tageblatt"
                                    className={classes.logo}
                                    style={{ maxWidth: "150px" }}
                                />
                            </a>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
