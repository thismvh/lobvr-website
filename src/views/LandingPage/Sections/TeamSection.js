import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// SVG icons
import Arrow from "components/SVGIcons/Arrow"

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import sumin from "assets/img/faces/sumin.jpg";
import imke from "assets/img/faces/imke.jpg";
import sascha from "assets/img/faces/sascha.jpg";
import marc from "assets/img/faces/marc.jpg";
import timon from "assets/img/faces/timon.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Meet our team</h2>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={sumin} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Sumin Kim
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Project Organisation
                                </p>
                                <p className={classes.description}>
                                    VR Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/suminkim94"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={imke} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Imke Mayer
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Content Development
                                </p>
                                <p className={classes.description}>
                                    Communication and Sales
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/imke-mayer-1ab63b1bb"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={sascha} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Alexander Palatnik
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Data Analysis
                                </p>
                                <p className={classes.description}>
                                    Backend Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/alexander-palatnik-9788801ab"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={marc} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Marc Viladrich
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    UX Development
                                </p>
                                <p className={classes.description}>
                                    Communication and Sales
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/marc-viladrich"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={timon} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Timon Jäger
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Visual Design
                                </p>
                                <p className={classes.description}>
                                    Environment Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/timon-j%C3%A4ger-4a9317206"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
                <div className={classes.teamToggle}>
                    <h3>See extended team</h3>
                    <Arrow />
                </div>
                
                <GridContainer justify="center" className={classes.extendedTeam}>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={sumin} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Tobias Probst
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Marketing
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/suminkim94"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={imke} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Ela
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    HR
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/imke-mayer-1ab63b1bb"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={sascha} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Luisa Seckinger
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    VR Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/alexander-palatnik-9788801ab"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={marc} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Meike Korsten
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    VR Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/marc-viladrich"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={timon} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Imogen Hüsing
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Visual Design
                                </p>
                                <p className={classes.description}>
                                    Environment Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/timon-j%C3%A4ger-4a9317206"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={timon} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Lea Doppertin
                            <br />
                                <small className={classes.smallTitle}></small>
                            </h4>
                            <CardBody className={classes.noYPadding}>
                                <p className={classes.description}>
                                    Visual Design
                                </p>
                                <p className={classes.description}>
                                    Environment Development
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter + " " + classes.noYPadding}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <a href="https://www.linkedin.com/in/timon-j%C3%A4ger-4a9317206"><i className={classes.socials + " fab fa-linkedin " + classes.linkedIn} /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
