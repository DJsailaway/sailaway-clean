import { PRICING } from "../data/pricing";

export function calculatePrice({
  boat,
  durationMode,
  durationKey,
  days,
  place
}) {
  if (!boat) {
    return {
      hire: 0,
      delivery: 0,
      total: 0,
      hasPrice: false,
      duration: "",
      boatName: "",
      lines: []
    };
  }

  const pricing = PRICING[boat.id];

  if (!pricing) {
    return {
      hire: 0,
      delivery: 0,
      total: 0,
      hasPrice: false,
      duration: "",
      boatName: boat.shortTitle || boat.title,
      lines: []
    };
  }

  let hire = 0;
  let duration = "";

  if (durationMode === "hourly") {
    hire = pricing.hourly?.[durationKey] ?? 0;

    const labels = {
      "1h": "1 Hour Hire",
      "2h": "2 Hour Hire",
      half: "Half Day Hire",
      full: "Full Day Hire"
    };

    duration = labels[durationKey] || "";
  }

  if (durationMode === "multiday") {
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
    place?.mode === "delivery"
      ? place.deliveryCharge || 0
      : 0;

  const total = hire + delivery;

  return {
    hasPrice: hire > 0,

    boatName: boat.shortTitle || boat.title,

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
