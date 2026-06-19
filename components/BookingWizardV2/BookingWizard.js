import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";
import PriceSummary from "./PriceSummary";
import ActivityCard from "./ActivityCard";

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
            gap: "16px"
          }}
        >
          <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
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
        marginTop: "12px",
        marginBottom: "28px",
        fontSize: "1rem",
        fontWeight: 500,
        marginBottom: "20px",
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
  />

  <ActivityCard
    title="Go sailing"
    description="Traditional and hands-on"
    image="/images/wizard/sailing.jpg"
  />

  <ActivityCard
    title="Paddle the creeks"
    description="Quiet and close to nature"
    image="/images/wizard/paddle.jpg"
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
