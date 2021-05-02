import React, { Component } from "react";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import components
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Container from "react-bootstrap/Container";

// import screens
import ContactUs from "./screens/ContactUs/ContactUs.js";

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div>
        <div className="wrapper">
          <NavBar />

          <Container style={{ marginTop: "3rem" }}>
            <Switch>
              <Route exact path="/">
                <p>
                  <Trans i18nKey="description.part1">
                    Edit and save to reload.
                  </Trans>
                </p>
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
            </Switch>
          </Container>

          {/* <a>{t("description.part2")}</a> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}
