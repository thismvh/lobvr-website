/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import HeaderLinks from "components/Header/HeaderLinks"

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <HeaderLinks />
                </div>
                <div className={classes.right}>
                    <List className={classes.list}>
                        <ListItem className={classNames(classes.listItem, classes.inline)}>
                            &copy; {1900 + new Date().getYear()} LobVR
                        </ListItem>
                        <ListItem className={classNames(classes.listItem, classes.inline)}>
                            <a href="/impressum">Impressum</a>
                        </ListItem>
                        <ListItem className={classNames(classes.listItem, classes.inline)}>
                            <a href="/datenschutz">Datenschutz</a>
                        </ListItem>
                    </List>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
