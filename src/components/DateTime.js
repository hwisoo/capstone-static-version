import React from "react";
import Clock from "react-live-clock";

function DateTime(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.date}</h2>
      <Clock
        format={"dddd, h:mm:ss A"}
        ticking={true}
        timezone={"US/Pacific"}
      />
    </div>
  );
}

export default DateTime;
