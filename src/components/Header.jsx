import React from "react";

function Header() {
  const d = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const day = weekday[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  var s = ["th", "st", "nd", "rd"];
  var v = date % 100;
  var ordinal = s[(v - 20) % 10] || s[v] || s[0];

  return (
    <div className="header">
      <h1>To-do List</h1>
      <hr />
      <h2>
        {day} the {date}
        {ordinal} of {month}
      </h2>
    </div>
  );
}

export default Header;
