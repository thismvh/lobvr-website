import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//svg-icons
import VR from "components/SVGIcons/VR"
import VRTherapy from "components/SVGIcons/VRTherapy"
import Data from "components/SVGIcons/Data"
import CostSavings from "components/SVGIcons/CostSavings"
import VREnvironments from "components/SVGIcons/VREnvironments"


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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>We make therapy exciting and accessible</h2>
          <h5 className={classes.description}>
            Therapy is hard. We are fixing that using
            the power of Virtual Reality. We provide therapists with the modern
            tools they need to stand out from the crowd and shape the future of
            psychotherapy.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer className={classes.iconsArea}>
          <GridItem className="extraPadding" xs={12} sm={12} md={6} lg={4}>
            <InfoArea
              title="Virtual Reality"
              description="We leverage the immersiveness of VR to create realistic and risk-free scenarios that make exposure therapy more effective."
              icon={VR}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem className="extraPadding" xs={12} sm={12} md={6} lg={4}>
            <InfoArea
              title="Digital Efficiency"
              description="Forget the complicated logistics of real-world exposure therapy. With VR, you just need a comfortable room and you can repeat the exposure as many times as you need. At no extra cost."
              icon={CostSavings}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem className="extraPadding" xs={12} sm={12} md={6} lg={4}>
            <InfoArea
              title="Personalised Environments"
              description="VR offers us unlimited ways to design fully controllable, personalised virtual environments that perfectly suit your needs."
              icon={VREnvironments}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem className="extraPadding" xs={12} sm={12} md={6} lg={4}>
            <InfoArea
              title="Remote Therapy"
              description="With VR, client and therapist can meet online. Therapy is not bound to the therapist's office anymore, it's accessible anytime, anywhere."
              icon={VRTherapy}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem className="extraPadding" xs={12} sm={12} md={6} lg={4}>
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
