import { Fragment, Suspense } from "react";
import React from "react";
import { useRef } from "react";

import LegendReinvented from "./_sections/legend_reinvented/LegendReinvented";
import Features from "./_sections/features/Features";
import ModelLineup from "./_sections/model_lineup/ModelLineup";
import ElectrostaticLegacy from "./_sections/electrostatic_legacy/ElectrostaticLegacy";
import FoldedMotionTweeters from "./_sections/folded_motion_tweeters/FoldedMotionTweeters";
import TunedReality from "./_sections/tuned_reality/TunedReality";
import ModernDesign from "./_sections/modern_design/ModernDesign";
import CabinetBracing from "./_sections/cabinet_bracing/CabinetBracing";
import Masonry from "./_sections/masonry/Masonry";
import PreFooter from "./_sections/pre_footer/PreFooter";
import Specifications from "./_components/specifications/Specifications";
import Downloads from "./_sections/downloads/Downloads";
import DealerLocator from "./_sections/dealer_locator/DealerLocator";

export const blocks = [
  {
    lazy: true,
    title: "Legend Reinvented",
    component: <LegendReinvented />,
    ref: false,
  },
  {
    lazy: true,
    title: "Features",
    component: <Features />,
    ref: false,
  },
  {
    lazy: true,
    title: "Model Lineup",
    component: <ModelLineup />,
    ref: false,
  },
  {
    lazy: true,
    title: "Electrostatic Legacy",
    component: <ElectrostaticLegacy />,
    ref: false,
  },
  {
    lazy: true,
    title: "Folded Motion Tweeters",
    component: <FoldedMotionTweeters />,
    ref: false,
  },
  {
    lazy: true,
    title: "Tuned Reality",
    component: <TunedReality />,
    ref: false,
  },
  {
    lazy: true,
    title: "Modern Design",
    component: <ModernDesign />,
    ref: false,
  },
  {
    lazy: true,
    title: "Enhanced Cabinet Bracing",
    component: <CabinetBracing />,
    ref: false,
  },
  {
    lazy: true,
    title: "Gallery",
    component: <Masonry />,
    ref: false,
  },
  {
    lazy: true,
    title: "Specs",
    component: <Specifications />,
    ref: false,
  },
  {
    lazy: true,
    title: "Downloads",
    component: <Downloads />,
    ref: false,
  },
  {
    lazy: true,
    title: "Dealer Locator",
    component: <DealerLocator />,
    ref: false,
  },
  {
    lazy: true,
    title: "Pre Footer",
    component: <PreFooter />,
    ref: false,
  },
];

export default function Dispatch() {
  const ref = useRef(null);
  return blocks.map((block, index) => (
    <Suspense fallback={""}>
      <Fragment key={index} ref={ref}>
        {block.component}
      </Fragment>
    </Suspense>
  ));
}
