import { PRICING } from "../data/pricing";

const BOAT_MAP = {
  "Plymouth Pilot (8 people)": {
    id: "plymouth-pilot",
    shortTitle: "Pilot"
  },

  "Bass Boat (5 people)": {
    id: "bass-boat",
    shortTitle: "Bass Boat"
  },

  "Drascombe Longboat (6 people)": {
    id: "drascombe",
    shortTitle: "Drascombe"
  },

  "Wayfarer Dinghy (4 people)": {
    id: "wayfarer",
    shortTitle: "Wayfarer"
  },

  "Topaz Dinghy (2 people)": {
    id: "topaz",
    shortTitle: "Topaz"
  },

  "Pico Dinghy (2 people)": {
    id: "pico",
    shortTitle: "Pico"
  },

  "Topper Dinghy (1 person)": {
    id: "topper",
    shortTitle: "Topper"
  },

  "Anarth Rowing Dinghy (4 people)": {
    id: "anarth",
    shortTitle: "Anarth"
  },

  "Double Kayak (2 people)": {
    id: "double-kayak",
    shortTitle: "Double Kayak"
  },

  "Single Kayak (1 person)": {
    id: "single-kayak",
    shortTitle: "Single Kayak"
  },

  "Stand-Up Paddleboard (1 person)": {
    id: "paddleboard",
    shortTitle: "Paddleboard"
  }
};

export function calculatePrice({
  boatName,
  durationType,
  durationKey,
  days = 1,
  location = "St Anthony"
}) {

  const boat = BOAT_MAP[boatName];

  if (!boat) {
    return {
      hasPrice: false,
      hire: 0,
      delivery: 0,
      total: 0,
      boatName: "",
      duration: "",
      lines: []
    };
  }

  const pricing = PRICING.boats[boat.id];

  if (!pricing) {
    return {
      hasPrice: false,
      hire: 0,
      delivery: 0,
      total: 0,
      boatName: boat.shortTitle,
      duration: "",
      lines: []
    };
  }

  let hire = 0;
  let duration = "";

  if (durationType === "hourly") {

    hire = pricing.hourly?.[durationKey] ?? 0;

    const labels = {
      "1h": "1 Hour Hire",
      "2h": "2 Hour Hire",
      half: "Half Day Hire",
      full: "Full Day Hire"
    };

    duration = labels[durationKey];

  } else {

    if (days <= 7) {
      hire = pricing.multiDay?.[days] ?? 0;
    } else {
      hire =
        (pricing.multiDay?.[7] ?? 0) +
        ((days - 7) * (pricing.extraDay ?? 0));
    }

    duration = `${days} Day Hire`;
  }

  const delivery =
    PRICING.locations?.[location] ?? 0;

  const total =
    hire + delivery;

  return {

    hasPrice: true,

    boatName: boat.shortTitle,

    duration,

    hire,

    delivery,

    total,

    lines: [

      {
        label: "Hire",
        value: hire
      },

      {
        label: "Delivery",
        value: delivery
      }

    ]

  };

}
