"use client";
import { useEffect } from "react";
import Styles from './RDV.module.css';

export default function BookingForm() {
  useEffect(() => {
    // Remove old script if already injected
    const existingScript = document.getElementById("gorendezvous-bookingwidget-script");
    if (existingScript) existingScript.remove();

    // Create and inject script
    const script = document.createElement("script");
    script.id = "gorendezvous-bookingwidget-script";
    script.src =
      "https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=" +
      (Math.floor(Date.now() / (1000 * 60 * 30)) * (1000 * 60 * 30)).toString();

    document.body.appendChild(script);

    return () => {
      // Optional cleanup: remove script when leaving the page
      const scriptToRemove = document.getElementById("gorendezvous-bookingwidget-script");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
      <div
      data-professionalpagename=""
      data-bookingwidgeturlparams="companyId=140158"
      data-language="fr"
      data-label="Prendre un rendez-vous"
      data-url="https://www.gorendezvous.com/"
      className={`gorendezvous-button ${Styles.button}`}
      data-buttoncolor="#66aaff"
      data-width="280px"
      data-height="50px"
    >
      <a
        href="https://www.gorendezvous.com/homepage/140158?companyId=140158"
        target="GOrendezvous"
      >
      </a>
    </div>
  );
}