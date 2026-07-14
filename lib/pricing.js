import { PRICING } from "../data/pricing";

export function calculatePrice({
  boatId,
  durationType,
  durationKey,
  days = 1,
  location = "St Anthony"
})

const pricing = PRICING[boatId];

if (!pricing) {
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

  const pricing = PRICING[boat.id];

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

    boatName: boatId,

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
