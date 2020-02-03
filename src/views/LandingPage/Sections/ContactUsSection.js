import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactUsStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function ContactUsSection() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        name: "",
        email: "",
        company: "",
        howknow: "",
        message: ""
    });

    const [emailSuccessModal, setEmailSuccessModal] = React.useState(false);
    const [emailErrorModal, setEmailErrorModal] = React.useState(false);

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.id;
        setState(state => ({
            ...state,
            [name]: value
        }));
    };

    async function handleSubmit(event) {
        event.preventDefault()

        const { name, email, company, howknow, message } = state

        const SERVER_URL = process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_SERVER_URL
            : process.env.REACT_APP_SERVER_URL_DEV

        const emailSent = await axios.post(`${SERVER_URL}/api/sendMail`, {
            name,
            email,
            company,
            howknow,
            message
        })

        if (emailSent.status === 200) {
            setEmailSuccessModal(true)
            setState({
                name: "",
                email: "",
                company: "",
                howknow: "",
                message: ""
            })
        } else {
            setEmailErrorModal(true)
        }
    }

    return (
        <div id="contact" className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Contact us</h2>
                    <h4 className={classes.description}>
                        Want to know more? Get in touch with us and
                        we'll be happy to get back to you.
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Name"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        value: state.name,
                                        onChange: handleChange
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Email"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        value: state.email,
                                        onChange: handleChange
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Company or Organisation"
                                    id="company"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        value: state.company,
                                        onChange: handleChange
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="How did you hear from us?"
                                    id="howknow"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        value: state.howknow,
                                        onChange: handleChange
                                    }}
                                />
                            </GridItem>
                            <CustomInput
                                labelText="Your Message"
                                id="message"
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea
                                }}
                                inputProps={{
                                    value: state.message,
                                    onChange: handleChange,
                                    multiline: true,
                                    rows: 5
                                }}
                            />
                            <GridContainer justify="center" className={classes.sendMessageContainer}>
                                <GridItem xs={12} sm={12} className={classes.textCenter}>
                                    <Button type="submit" color="primary">Send Message</Button>
                                </GridItem>
                            </GridContainer>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>

            {/* Modals */}
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={emailSuccessModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setEmailSuccessModal(false)}
                aria-labelledby="email-success-modal-slide-title"
                aria-describedby="email-success-modal-slide-description"
            >
                <DialogTitle
                    id="email-success-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setEmailSuccessModal(false)}
                    >
                        <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Message Sent</h4>
                </DialogTitle>
                <DialogContent
                    id="email-success-modal-slide-description"
                    className={classes.modalBody}
                >
                    <p>
                        Thanks, your message was sent! We'll get back to you shortly!
                    </p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button
                        onClick={() => setEmailSuccessModal(false)}
                        color="danger"
                        simple
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={emailErrorModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setEmailErrorModal(false)}
                aria-labelledby="email-error-modal-slide-title"
                aria-describedby="email-error-modal-slide-description"
            >
                <DialogTitle
                    id="email-error-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setEmailErrorModal(false)}
                    >
                        <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Message Error</h4>
                </DialogTitle>
                <DialogContent
                    id="email-error-modal-slide-description"
                    className={classes.modalBody}
                >
                    <p>
                        Oops, something went wrong! Please try again later while we fix the issue!
                    </p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button
                        onClick={() => setEmailErrorModal(false)}
                        color="danger"
                        simple
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Modals */}
        </div>
    );
}
