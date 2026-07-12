import { useState } from "react";

import StepHeader from "./StepHeader";
import WizardLayout from "./WizardLayout";
import BottomActionBar from "./BottomActionBar";
import PriceSummary from "./PriceSummary";
import ActivityCard from "./ActivityCard";
import BoatStep from "./steps/BoatStep";
import DurationStep from "./steps/DurationStep";
import DateStep from "./steps/DateStep";
import LocationStep from "./steps/LocationStep";
import ContactStep from "./steps/ContactStep";


export default function BookingWizard() {
const [activity, setActivity] = useState(null);
const [selectedBoat, setSelectedBoat] = useState(null);
const [currentStep, setCurrentStep] = useState(0);

const [durationMode, setDurationMode] = useState(null);
const [durationKey, setDurationKey] = useState("2h");
const [days, setDays] = useState(7);

const [bookingDate, setBookingDate] = useState("");
const [startTime, setStartTime] = useState("");

const [place, setPlace] = useState({
  mode: "boatyard",
  location: "St Anthony",
  deliveryCharge: 0
});

const requiresDeliveryStep =
  durationMode === "multiday" &&
  days >= 2;

const progressSteps = [
  {
    key: "boat",
    label: selectedBoat || "Boat"
  },
  {
    key: "duration",
    label: "Length"
  },
  {
    key: "date",
    label: "Date"
  },
  ...(requiresDeliveryStep
    ? [
        {
          key: "location",
          label: "Place"
        }
      ]
    : []),
  {
    key: "details",
    label: "You"
  }
];

const [customer, setCustomer] = useState({
  name: "",
  email: "",
  phone: "",
  notes: ""
});

const inputStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #E5E7EB",
  fontSize: "1rem",
  outline: "none",
  color: "#123B5D"
};
  
  return (
    <>
<StepHeader
  currentStep={currentStep}
  steps={progressSteps.map(step => step.label)}
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
      onSelect={(boatId) => {
        setSelectedBoat(boatId);
        setCurrentStep(2);
}}
    />
  )}

{currentStep === 2 && (
<DurationStep
  activity={activity}
  value={{
    durationMode,
    durationKey,
    days
  }}
  onChange={(patch) => {
    if (patch.durationMode !== undefined) {
      setDurationMode(patch.durationMode);
    }

    if (patch.durationKey !== undefined) {
      setDurationKey(patch.durationKey);
    }

    if (patch.days !== undefined) {
      setDays(patch.days);
    }
  }}
/>
)}

    {currentStep === 3 && (
  <DateStep
    durationMode={durationMode}
    durationKey={durationKey}
    days={days}
    value={{
      date: bookingDate,
      startTime
    }}
    onChange={(patch) => {
      if (patch.date) {
        setBookingDate(patch.date);
      }

      if (patch.startTime) {
        setStartTime(patch.startTime);
      }
    }}
  />
)}

{requiresDeliveryStep && currentStep === 4 && (
  <LocationStep
    value={place}
    onChange={(patch) => {
      setPlace((prev) => ({
        ...prev,
        ...patch
      }));
    }}
  />
)}

{currentStep === 5 && (
  <ContactStep
    value={customer}
    onChange={(patch) => {
      setCustomer((prev) => ({
        ...prev,
        ...patch
      }));
    }}
  />
)}
    
</WizardLayout>

      <BottomActionBar
        onBack={() =>
        setCurrentStep(Math.max(0, currentStep - 1))
       }
       onNext={() => {
  if (currentStep === 3 && !requiresDeliveryStep) {

    setPlace({
      mode: "boatyard",
      location: "St Anthony",
      deliveryCharge: 0
    });

    setCurrentStep(5);

  } else {

    setCurrentStep((prev) => {
  const maxStep = requiresDeliveryStep ? 5 : 4;
  return Math.min(maxStep, prev + 1);
});

  }
}}
       total="£0"
     />
    </>
  );
}
