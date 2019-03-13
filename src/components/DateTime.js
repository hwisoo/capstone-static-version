import React from "react";
import Clock from "react-live-clock";

function DateTime(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.date}</h3>
      <Clock
        format={"dddd, h:mm:ss A"}
        ticking={true}
        timezone={"US/Pacific"}
      />
    </div>
  );
}

export default DateTime;
