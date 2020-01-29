import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselProjectsStyle.js";

const useStyles = makeStyles(styles);

export default function CarouselProjects(props) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true
    };
    return (
        <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8} className={classes.marginAuto + " " + classes.matchPadding}>
                    <Card carousel>
                        <Carousel {...settings}>
                            {
                                props.imgs.map(({ img, caption, icon }) => 
                                    <div>
                                        <img src={img} alt={caption} className={classes.carouselImg} />
                                        <div className="slick-caption">
                                            <h4>
                                                <React.Fragment>
                                                    {icon !== undefined && icon}
                                                </React.Fragment>
                                                {caption}
                                            </h4>
                                        </div>
                                    </div>
                                )
                            }
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
