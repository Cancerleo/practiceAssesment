import React from "react";

export default function() {
  const now = new Date();
  const currentHour = now.getHours();
  const isAfterOpeningTime = currentHour >= 8;
  const isBeforeClosingtime = currentHour < 17;
  const isCurrentlyOpen = isAfterOpeningTime && isBeforeClosingtime;
  return (
    <div>
      <p>We are: {isCurrentlyOpen ? "Open" : "Closed"}</p>
      <p>To make an appointment</p>
      <p>Call 020 555 5555</p>
    </div>
  );
}
