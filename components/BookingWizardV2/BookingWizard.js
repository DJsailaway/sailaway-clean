```jsx
import { useEffect, useState } from "react";

import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";
import PriceSummary from "./PriceSummary";
import ActivityCard from "./ActivityCard";

export default function BookingWizard() {
  const [isMobile, setIsMobile] = useState(false);

const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener("resize", check);

    return () =>
      window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <StepHeader
        currentStep={0}
        steps={[
          "Activity",
          "Boat",
          "Duration",
          "Date",
          "Location",
          "Details"
        ]}
      />

      <WizardLayout
        summary={<PriceSummary />}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "14px" : "18px"
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                marginBottom: isMobile ? "12px" : "8px",
                fontSize: isMobile ? "1.75rem" : "2rem",
                lineHeight: 1.1,
                fontWeight: 600,
                color: "#123B5D"
              }}
            >
              Plan your time on the Helford
            </h1>

            {!isMobile && (
              <p
                style={{
                  margin: 0,
                  color: "#64748B",
                  fontSize: "1.05rem"
                }}
              >
                How would you like to explore?
              </p>
            )}
          </div>

          <ActivityCard
            title="Explore by motor boat"
            description="Comfortable & family friendly"
            image="/images/wizard/motorboat.jpg"
            selected={selectedActivity === "motor"}
            onClick={() => setSelectedActivity("motor")}
          />

          <ActivityCard
            title="Go sailing"
            description="Traditional & hands-on"
            image="/images/wizard/sailing.jpg"
            selected={selectedActivity === "sailing"}
            onClick={() => setSelectedActivity("sailing")}
          />

          <ActivityCard
            title="Paddle the creeks"
            description="Quiet & close to nature"
            image="/images/wizard/paddle.jpg"
            selected={selectedActivity === "paddle"}
            onClick={() => setSelectedActivity("paddle")}
          />
        </div>
      </WizardLayout>

      <BottomActionBar
        onBack={() => {}}
        onNext={() => {}}
        total="£0"
        disableNext={!selectedActivity}
      />
    </>
  );
}
```
