import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import HomeIcon from '@material-ui/icons/Home';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ForumIcon from '@material-ui/icons/Forum';
import FastfoodIcon from '@material-ui/icons/Fastfood';

// import custom icons
import Addiction from "components/SVGIcons/Addiction.jsx"
import Argument from "components/SVGIcons/Argument.jsx"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import addictionTutorial from "assets/img/examples/addiction-tutorial.jpg";
import addictionApartment from "assets/img/examples/addiction-apartment-scene.png";
import addictionRelaxScene from "assets/img/examples/addiction-relax-scene.png";
import addictionGroceries from "assets/img/examples/addiction-groceries-kiosk.png"
import addictionAlcohol from "assets/img/examples/addiction-alcohol-kiosk.png"

import edSandwich from "assets/img/examples/eating-sandwich.png"
import edSocial from "assets/img/examples/eating-social.png"


import styles from "assets/jss/material-kit-react/views/landingPageSections/projectsStyle.js";
import CarouselProjects from "../CarouselProjects";

const useStyles = makeStyles(styles);

export default function ProjectsSection(props) {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.profile}>
                            <h2 className={classes.title}>Our Projects</h2>
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={12} className={classes.navWrapper}>
                        <NavPills
                            alignCenter
                            color="primary"
                            tabs={[
                                {
                                    tabButton: "Addiction",
                                    tabIcon: Addiction,
                                    tabContent: (
                                        <div>
                                            <p className={classes.description}>
                                                Ongoing collaboration with the AMEOS-Klinikum Osnabrück to push for a new way of treating alcohol addiction.
                                                Due to the strong presence of alcohol in everyday life, the relapse rate is very high. Therefore, the key to treatment and rehabilitation is often to learn and
                                                simulate the coping mechanisms in as many situations as possible. However, due to lack of resources, it's often simply not an option to train these coping skills in real life. As a result, not only the treatment itself but screening of patients and intermediate
                                                diagnoses are strongly text based, making it difficult  for therapists to access the behavioral data of their patients. This ultimately compromises the chances for an efficient treatment.
                                                We present patients a story in which they are helping an alcoholic friend to reinsert themselves into society. They are first asked to clean up the friend's alcohol-riddled apartment and then to go to the supermarket, resisting the temptation of buying alcohol.
                                            </p>
                                            <CarouselProjects
                                                imgs={[
                                                    {
                                                        img: addictionTutorial,
                                                        caption: "Tutorial Scene",
                                                        icon: <LiveHelpIcon className="slick-icons" />
                                                    },
                                                    {
                                                        img: addictionApartment,
                                                        caption: "In-Game View",
                                                        icon: <HomeIcon className="slick-icons" />
                                                    },
                                                    {
                                                        img: addictionRelaxScene,
                                                        caption: "Relax Scene",
                                                        icon: <NaturePeopleIcon className="slick-icons" />
                                                    },
                                                    {
                                                        img: addictionGroceries,
                                                        caption: "Groceries in Kiosk",
                                                        icon: <ShoppingCartIcon className="slick-icons" />
                                                    },
                                                    {
                                                        img: addictionAlcohol,
                                                        caption: "Alcohol in Kiosk",
                                                        icon: <LocalBarIcon className="slick-icons" />
                                                    }
                                                ]}
                                            />
                                        </div>
                                    )
                                },
                                {
                                    tabButton: "Eating Disorders",
                                    tabIcon: Argument,
                                    tabContent: (
                                        <div>
                                            <p className={classes.description}>
                                                Ongoing collaboration with Lebens*Impulse Osnabrück to help treat eating disorders like anorexia or bulimia. With this project we tackle the biggest challenge eating disorder patients face: being exposed to food in a
                                                social situation. We place patients in a social situation and train to cope with the feeling of being constantly judged about their food choices.
                                            </p>
                                            <CarouselProjects
                                                imgs={[
                                                    {
                                                        img: edSandwich,
                                                        caption: "Interaction with Food",
                                                        icon: <FastfoodIcon className="slick-icons" />
                                                    },
                                                    {
                                                        img: edSocial,
                                                        caption: "Social Interaction",
                                                        icon: <ForumIcon className="slick-icons" />
                                                    },
                                                ]}
                                            />
                                        </div>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
