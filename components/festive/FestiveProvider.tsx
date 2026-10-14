"use client";

import { useState } from "react";
import FestiveTopBar from "./FestiveTopBar";
import DussehraOfferPopup from "./DussehraOfferPopup";
import FestiveFloatingTrigger from "./FestiveFloatingTrigger";

export default function FestiveProvider() {
  const [showPopup, setShowPopup] = useState<boolean | undefined>(undefined);

  return (
    <>
      <FestiveTopBar onOpenOffer={() => setShowPopup(true)} />
      <DussehraOfferPopup
        forceOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <FestiveFloatingTrigger onClick={() => setShowPopup(true)} />
    </>
  );
}
