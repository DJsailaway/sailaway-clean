import { useState } from "react";

import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";
import PriceSummary from "./PriceSummary";
import ActivityCard from "./ActivityCard";
import BoatStep from "./steps/BoatStep";

export default function BookingWizard() {
const [activity, setActivity] = useState(null);
const [selectedBoat, setSelectedBoat] = useState(null);
const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <>
      <StepHeader
        title="Book Your Boat"
        currentStep={currentStep}
        steps={[
          "Activity",
          "Boat",
          "Length",
          "Date",
          "Place",
          "You"
        ]}
        isMobile={false}
      />

      <WizardLayout
  summary={<PriceSummary />}
>
  {currentStep === 0 && (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: "#123B5D",
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "6px"
          }}
        >
          Plan your time on the Helford
        </h1>

        <p
          style={{
            marginTop: "8px",
            marginBottom: "12px",
            fontSize: "1rem",
            fontWeight: 500,
            color: "#64748B"
          }}
        >
          How would you like to explore?
        </p>
      </div>

      <ActivityCard
        title="Explore by motor boat"
        description="Comfortable and flexible for families"
        image="/images/wizard/motorboat.jpg"
        onClick={() => {
          setActivity("motor");
          setCurrentStep(1);
        }}
      />

      <ActivityCard
        title="Go sailing"
        description="Traditional and hands-on"
        image="/images/wizard/sailing.jpg"
        onClick={() => {
          setActivity("sailing");
          setCurrentStep(1);
        }}
      />

      <ActivityCard
        title="Paddle the creeks"
        description="Quiet and close to nature"
        image="/images/wizard/paddle.jpg"
        onClick={() => {
          setActivity("paddle");
          setCurrentStep(1);
        }}
      />
    </div>
  )}

  {currentStep === 1 && (
    <BoatStep
      activity={activity}
      selectedBoat={selectedBoat}
      onSelect={setSelectedBoat}
    />
  )}
</WizardLayout>

      <BottomActionBar
        onBack={() =>
        setCurrentStep(Math.max(0, currentStep - 1))
       }
       onNext={() =>
        setCurrentStep(Math.min(5, currentStep + 1))
       }
       total="£0"
     />
    </>
  );
}
