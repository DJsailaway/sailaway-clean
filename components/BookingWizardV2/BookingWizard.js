import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";
import PriceSummary from "./PriceSummary";

export default function BookingWizard() {
  return (
    <>
      <StepHeader
        title="Book Your Boat"
        currentStep={0}
        steps={[
          "Activity",
          "Boat",
          "Duration",
          "Date",
          "Location",
          "Details"
        ]}
        isMobile={false}
      />

      <WizardLayout
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
  <h2 style={{ margin: 0 }}>Choose your activity</h2>

  <div style={{
    padding: "24px",
    border: "1px solid #E5E7EB",
    borderRadius: "16px",
    background: "#fff"
  }}>
    Activity cards will go here
  </div>
</div>
      </WizardLayout>

      <BottomActionBar
        onBack={() => {}}
        onNext={() => {}}
        total="£0"
      />
    </>
  );
}
        onBack={previousStep}
        onNext={nextStep}
        total="£0"
      />
    </>
  );
}
