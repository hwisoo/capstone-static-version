import React from "react";
import Clock from "react-live-clock";

function DateTime() {
  return (
    <Clock
      format={"dddd, MMMM Mo, YYYY, h:mm:ss A"}
      ticking={true}
      timezone={"US/Pacific"}
    />
  );
}

export default DateTime;
