import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import Roadmap from "components/SVGIcons/Roadmap.jsx"
import Roadmap from "components/Roadmap/Roadmap.js"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle.js";

const useStyles = makeStyles(styles);

export default function RoadmapSection() {
    const classes = useStyles();
    return (
        <div id="roadmap" className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12}>
                    <h2 className={classes.title}>Roadmap</h2>
                    <h4 className={classes.description}>
                        Our journey so far
                    </h4>
                    <Roadmap 
                        className = {classes.roadmapPath}
                        milestones = {[
                            {
                                name: "Development Phase",
                                date: "Q3 2019 - Q4 2019",
                                details: [
                                    "Develop contents and prototype"
                                ],
                            },
                            {
                                name: "Start at Seedhouse",
                                date: "Q1 2020",
                                details: [],
                            },
                            {
                                name: "Prototype Pilot Tests",
                                date: "Q1 2020 - Q2 2020",
                                details: [
                                    "Test addiction prototype with clinical experts and patients",
                                    "Develop eating disorder prototype",
                                    "EXIST application"
                                ],
                            },
                            {
                                name: "Company Founding",
                                date: "Q3 2020",
                                details: [],
                            },
                            {
                                name: "Beta Version",
                                date: "Q3 2020 - Q1 2021",
                                details: [
                                    "Publish first Beta",
                                    "Improve on feedback"
                                ],
                            },
                            {
                                name: "Official Product Launch",
                                date: "Q2 2021",
                                details: [
                                    "Launch application on SteamVR"
                                ],
                            },
                            {
                                name: "Analytics Platform Test",
                                date: "Q2 2021 - Q3 2021",
                                details: [
                                    "Develop and test the Analytics Platform"
                                ],
                            },
                        ]}
                    />

                </GridItem>
            </GridContainer>
        </div>
    );
}
