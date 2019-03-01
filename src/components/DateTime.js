import React from "react";
import Clock from "react-live-clock";

function DateTime() {
  return <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />;
}

export default DateTime;
