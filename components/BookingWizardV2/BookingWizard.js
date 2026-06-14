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
        summary={<PriceSummary />}
      >
        <div style={{
          padding: "40px",
          fontSize: "20px"
        }}>
          Shell working ✓
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
