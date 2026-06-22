import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";
import PriceSummary from "./PriceSummary";
import ActivityCard from "./ActivityCard";
import BoatStep from "./steps/BoatStep";

export default function BookingWizard() {
  return (
    <>
      <StepHeader
        title="Book Your Boat"
        currentStep={0}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
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
        marginBottom: "12px",
        color: "#64748B"
      }}
    >
      How would you like to explore?
    </p>
  </div>

<BoatStep
  activity="sailing"
  selectedBoat="wayfarer"
  onSelect={(id) => console.log(id)}
/>
    
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
