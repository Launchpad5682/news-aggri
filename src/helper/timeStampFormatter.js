export const timeStampFormatter = (timeStamp) => {
  // console.log(timeStamp.split("T"));
  if (timeStamp) {
    const [date, time] = timeStamp.split("T");
    const [year, month, day] = date.split("-");

    const monthString = (() => {
      switch (Number(month)) {
        case 1:
          return "Jan";
        case 2:
          return "Feb";
        case 3:
          return "Mar";
        case 4:
          return "Apr";
        case 5:
          return "May";
        case 6:
          return "Jun";
        case 7:
          return "Jul";
        case 8:
          return "Aug";
        case 9:
          return "Sep";
        case 10:
          return "Oct";
        case 11:
          return "Nov";
        case 12:
          return "Dec";
        default:
          return "";
      }
    })();
    return `${day} ${monthString} ${year}`;
  }
  return timeStamp;
};
