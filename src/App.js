import React, { Component } from "react";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";

// import components
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Container from "react-bootstrap/Container";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="wrapper">
        <NavBar />
        {/* <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.language === lng ? "bold" : "normal" }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div> */}

        <Container style={{ marginTop: "3rem" }}>
          <p>
            <Trans i18nKey="description.part1">Edit and save to reload.</Trans>
          </p>
        </Container>

        {/* <a>{t("description.part2")}</a> */}
      </div>
      <Footer />
    </div>
  );
}
