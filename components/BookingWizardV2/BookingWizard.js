import { useState } from "react";

import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";

export default function BookingWizard() {
  const steps = [
    "Choose Activity",
    "Choose Boat",
    "Duration",
    "Date & Time",
    "Location",
    "Your Details"
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((step) =>
      Math.min(step + 1, steps.length - 1)
    );
  };

  const previousStep = () => {
    setCurrentStep((step) =>
      Math.max(step - 1, 0)
    );
  };

  return (
    <>
      <StepHeader
        title="Book Your Boat"
        currentStep={currentStep}
        steps={steps}
        isMobile={false}
      />

      <WizardLayout
        summary={
          <div
            style={{
              padding: "24px",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #E5E7EB"
            }}
          >
            <h3>Your Booking</h3>

            <p>Boat: Not selected</p>
            <p>Duration: Not selected</p>
            <p>Date: Not selected</p>
            <p>Location: Not selected</p>

            <hr />

            <h2>£0</h2>
          </div>
        }
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "32px",
            minHeight: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: 600
          }}
        >
          Placeholder Step Content
        </div>
      </WizardLayout>

      <BottomActionBar
        onBack={previousStep}
        onNext={nextStep}
        total="£0"
      />
    </>
  );
}
