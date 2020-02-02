/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/roadmapStyle.js";

const useStyles = makeStyles(styles);

export default function Roadmap(props) {
    const classes = useStyles();
    return (
        <div className={classes.timeline}>
            <ul className={classes.milestoneList}>
                {
                    props.milestones.map(({ name, details, date }) => {
                        return (
                            <li>
                                <div className={classes.content}>
                                    <h3>{name}</h3>
                                    <ul className={classes.milestoneDetails}>
                                        {
                                            details.map(detail => <li>{detail}</li>)
                                        }
                                    </ul>
                                </div>
                                <div className={classes.time}>
                                    <div className={classes.timeWrapper}>
                                        <h4>{date}</h4>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
