import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//svg-icons
import VR from "components/SVGIcons/VR"
import VRTherapy from "components/SVGIcons/VRTherapy"
import Data from "components/SVGIcons/Data"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center" className={classes.marginBottom}>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>We make therapy exciting and accessible</h2>
          <h5 className={classes.description}>
            Going to therapy is hard. We are fixing that using
            the power of Virtual Reality. We provide therapists with the modern
            tools they need to stand out from the crowd and shape the future of
            psychotherapy.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Reality"
              description="We leverage the immersiveness of VR to create a personalised, realistic and risk-free environment where clients can train to cope with their mental disorders."
              icon={VR}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Remote Therapy"
              description="With VR, client and therapist can meet online. Therapy is not bound to the therapist's office anymore, it's accessible anytime, anywhere."
              icon={VRTherapy}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Data-Driven Therapy"
              description="We equip therapists with biometric client data that will help them track their clients' progress and make more robust diagnoses."
              icon={Data}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
