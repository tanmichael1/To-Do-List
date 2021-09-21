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

  // Use a different header image depending on the time of day
  const getHeaderImageClass = (hour) => {
    if (hour >= 6 && hour < 16) {
      // Day time - 06:00 to 16:00
      return "bg-todo-header-day";
    } else if (hour >= 16 && hour < 20) {
      // Afternoon - 16:00 to 20:00
      return "bg-todo-header-afternoon";
    } else if (hour >= 20 || hour <= 5) {
      // Night time - 20:00 to 05:00
      return "bg-todo-header-night";
    }
  };

  return (
    <div className="header">
      <h1>To-do List</h1>

      <hr />
      <h2>
        {day} {date}
        {ordinal} of {month}{" "}
      </h2>
    </div>
  );
}

export default Header;
