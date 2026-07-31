import { useState, useEffect } from "react";

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
import { calculatePrice } from "../../lib/pricing";
import ReviewBooking from "./ReviewBooking";

export default function BookingWizard() {
const [activity, setActivity] = useState(null);
const [selectedBoat, setSelectedBoat] = useState(null);
const [currentStep, setCurrentStep] = useState(0);

const [mode, setMode] = useState("wizard");
const [returnToReview, setReturnToReview] = useState(false);

const editStep = (step) => {   setReturnToReview(true);   setMode("wizard");   setCurrentStep(step); };

const [durationMode, setDurationMode] = useState(null);
const [durationKey, setDurationKey] = useState("2h");
const [hasSelectedDuration, setHasSelectedDuration] = useState(false);
const [hasSelectedPlace, setHasSelectedPlace] = useState(false);
const [days, setDays] = useState(7);

const [bookingDate, setBookingDate] = useState("");
const [startTime, setStartTime] = useState("");

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => {
    setIsMobile(window.innerWidth < 768);
  };

  check();

  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);

const [place, setPlace] = useState({
  mode: "boatyard",
  location: "St Anthony",
  shortTitle: "St Anthony",
  deliveryCharge: 0
});

const requiresDeliveryStep =
  durationMode === "multiday" &&
  days >= 2;

const getDurationLabel = () => {
  if (!hasSelectedDuration) {
    return "Length";
  }

  if (durationMode === "multiday") {
    return `${days} Days`;
  }

  if (durationKey === "1h") {
    return "1 Hour";
  }

  if (durationKey === "2h") {
    return "2 Hours";
  }

  if (durationKey === "half") {
    return "Half Day";
  }

  if (durationKey === "full") {
    return "Full Day";
  }

  return "Length";
};

const truncateLabel = (text, maxLength = 15) => {
  if (!text) return "";

  return text.length > maxLength
    ? `${text.slice(0, maxLength)}…`
    : text;
};

const getDateLabel = () => {
  if (!bookingDate) {
    return "Date";
  }

  const date = new Date(bookingDate);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });
};

const getPlaceLabel = () => {
  if (!hasSelectedPlace) {
  return "Place";
}
  if (!place.location) {
    return "Place";
  }

  if (place.location === "Other") {
    return truncateLabel(place.customLocation || "Place");
  }

  return truncateLabel(place.shortTitle || place.location);
};

const progressSteps = [
  {
    key: "boat",
    label: selectedBoat?.shortTitle || "Boat"
  },
  {
    key: "duration",
    label: getDurationLabel()
  },
  {
  key: "date",
  label: getDateLabel()
  },
  ...(requiresDeliveryStep
    ? [
        {
          key: "location",
          label: getPlaceLabel()
        }
      ]
    : []),
  {
    key: "details",
    label: "You"
  }
];

let progressStep;

if (currentStep <= 1) {
  // Activity + Boat screens = Boat decision
  progressStep = 0;

} else if (currentStep === 2) {
  // Length
  progressStep = 1;

} else if (currentStep === 3) {
  // Date
  progressStep = 2;

} else if (requiresDeliveryStep) {
  // Multi-day journey
  progressStep = currentStep === 4 ? 3 : 4;

} else {
  // Hourly journey (Place skipped)
  progressStep = 3;
}
  
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
  
const price = hasSelectedDuration
  ? calculatePrice({
      boatId: selectedBoat?.id,
      durationType: durationMode,
      durationKey,
      days,
      location: place.location
    })
  : {
      hasPrice: false,
      total: 0
    };

console.log(price);

const reviewData = {
  boat: selectedBoat?.title || "",
  duration: getDurationLabel(),
  date: getDateLabel(),
  startTime:
  durationKey === "full"
    ? "09:00"
    : durationKey === "half"
      ? startTime === "13:00"
        ? "13:00"
        : "09:00"
      : startTime,
  meetingPlace: getPlaceLabel(),

  customer: {
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    notes: customer.notes
  },

  price
};
  
return (
  <div
    id="booking-wizard"
    style={{
  scrollMarginTop: "90px",

  height: "100dvh",

  display: "flex",
  flexDirection: "column",

  overflow: "hidden"
}}
  >

<WizardLayout
  reviewMode={mode === "review"}
header={
  mode === "wizard" ? (
    <StepHeader
      progressStep={progressStep}
      progressSteps={progressSteps}
      onStepClick={(step) => {
        if (step === "boat") setCurrentStep(0);
        if (step === "duration") setCurrentStep(2);
        if (step === "date") setCurrentStep(3);
        if (step === "location") setCurrentStep(4);
        if (step === "details") setCurrentStep(5);
      }}
    />
  ) : (
    <div style={{ height: 0 }} />
  )
}

  footer={
    <BottomActionBar
      onBack={() =>
        setCurrentStep(Math.max(0, currentStep - 1))
      }
      onNext={() => {

      if (currentStep === 5) {
        setMode("review");

          setTimeout(() => {
            if (isMobile) {
              window.scrollTo({
                top: document.getElementById("booking-wizard")?.offsetTop,
                behavior: "instant"
              });
            } else {
              document
                .getElementById("booking-wizard")
                ?.scrollIntoView({
                  block: "start",
                  behavior: "instant"
                });
              }
            }, 0);
        
        return;
      }
        
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
      total={
        price.hasPrice
          ? `£${price.total}`
          : "£0"
      }
    />
  }
>
{mode === "review" ? (
<div
  style={{
    height: "100%"
  }}
>
  <ReviewBooking
    reviewData={reviewData}
    onEditStep={editStep}
  />
</div>
) : (
<>

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
      onSelect={(boat) => {
        setSelectedBoat(boat);
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
    setHasSelectedDuration(true);
  }

  if (patch.durationKey !== undefined) {
    setDurationKey(patch.durationKey);
    setHasSelectedDuration(true);
  }

  if (patch.days !== undefined) {
    setDays(patch.days);
    setHasSelectedDuration(true);
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
      setHasSelectedPlace(true);
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
  </>
)}

</WizardLayout>

    </div>
  );
}
