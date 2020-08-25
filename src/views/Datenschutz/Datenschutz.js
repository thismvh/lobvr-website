import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/impressum.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div className={classes.impressumRoot}>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Datenschutz"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                style={{ color: "black" }}
                {...rest}
            />
            <div className={classNames(classes.container, classes.paddingTop)}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <h3><a href="/"><i className="fas fa-chevron-left"></i> Go Home</a></h3>
                        <br />
                        <h1 className={classes.title}>Datenschutz</h1>
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.main}>
                <div className={classes.container}>
                    <h3>Angaben gemäß § 5 TMG</h3>
                    <p>
                        Marc Viadrich
                        <br />
                        Marie-Curie-Str. 3
                        <br />
                        49076 Osnabrück
                    </p>

                    <h3>Kontakt</h3>
                    <p>
                        E-Mail: hello@lobvr.com
                    </p>

                    <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    Haftung für Inhalte
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>

                    Haftung für Links
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                        Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        <br />
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                        umgehend entfernen.
                    </p>
                    <br />
                    <h3>Urheberrecht</h3>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        <br />
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                        Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </div>
            </div>
            <Footer />
        </div >
    );
}
