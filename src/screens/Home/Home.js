import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default function Home() {
  return (
    <div>
      <p>
        <Trans i18nKey="description.part1">Edit and save to reload.</Trans>
      </p>
    </div>
  );
}
