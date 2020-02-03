const roadmapStyle = theme => ({
    milestoneList: {
        margin: 0,
        padding: 0,
        paddingTop: "40px"
    },

    timeWrapper: {
        width: "150px"
    },

    content: {
        paddingBottom: "40px"
    },

    time: {
        position: "absolute",
        top: "34px",
        margin: 0,
        padding: 0,
        padding: "8px 16px",
        color: "#FFF",

        [theme.breakpoints.down("xs")]: {
            top: "-10px"
        }
    },

    milestoneDetails: {
        padding: 0,

        "& li": {
            listStyle: "none",
            margin: "15px 0"
        },

        "& li:first-child": {
            marginTop: "10px"
        }
    },

    timeline: {
        position: "relative",
        width: "100%",
        height: "85%",
        color: "#555",
        margin: "50px auto",
        padding: "40px auto",

        "&:before": {
            content: '""',
            position: "absolute",
            left: "50%",
            height: "100%",
            width: "3px",
            borderRadius: "3px",
            background: "#555",

            [theme.breakpoints.down("xs")]: {
                left: "20px"
            }
        },

        "& $milestoneList > li": {
            listStyle: "none",
            position: "relative",
            width: "50%",
            padding: "37px",
            boxSizing: "border-box",
        },
        "& $milestoneList > li h3": {
            margin: 0,
            padding: 0,
            fontWeight: 500,
            color: "#9C27B0"
        },
        "& $milestoneList > li:nth-child(odd)": {
            float: "left",
            textAlign: "right",
            clear: "both",
            paddingLeft: 0,

            "&:before": {
                content: '""',
                position: "absolute",
                top: "48px",
                right: "-9px",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#9C27B0",
                boxShadow: "0 0 0 3px rgba(156, 39, 176, 0.2)",

                [theme.breakpoints.down("xs")]: {
                    top: "4px",
                    left: "14px"
                }
            },

            "& $time": {
                right: "-205px",

                [theme.breakpoints.down("xs")]: {
                    left: "36px",
                    right: "inherit"
                }
            },

            "& $timeWrapper": {
                textAlign: "left"
            },

            [theme.breakpoints.down("xs")]: {
                width: "100%",
                textAlign: "left",
                paddingLeft: "50px"
            }
        },
        "& $milestoneList > li:nth-child(even)": {
            float: "right",
            textAlign: "left",
            clear: "both",
            paddingRight: 0,

            "&:before": {
                content: '""',
                position: "absolute",
                top: "48px",
                left: "-6px",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#9C27B0",
                boxShadow: "0 0 0 3px rgba(156, 39, 176, 0.2)",

                [theme.breakpoints.down("xs")]: {
                    top: "4px",
                    left: "14px"
                }
            },

            "& $time": {
                left: "-205px",

                [theme.breakpoints.down("xs")]: {
                    left: "35px",
                    right: "inherit"
                }
            },

            "& $timeWrapper": {
                textAlign: "right",

                [theme.breakpoints.down("xs")]: {
                    textAlign: "left"
                }
            },

            [theme.breakpoints.down("xs")]: {
                width: "100%",
                textAlign: "left",
                paddingLeft: "50px",
            }
        },
        "& $milestoneList > li $time h4": {
            display: "inline",
            margin: 0,
            padding: 0,
            fontSize: "14px",
            fontWeight: 500,
            padding: "8px 16px",
            background: "rgb(156, 39, 176)",
            borderRadius: "18px"
        },
    },
});

export default roadmapStyle;
