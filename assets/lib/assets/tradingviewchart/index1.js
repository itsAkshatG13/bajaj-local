const durationButtons = document.querySelectorAll(".duration-btn");
const assets = false;
//rendering based on assets value
if (assets) {
  durationButtons.forEach((durationBtn) => {
    if (!durationBtn.className.includes("day"))
      durationBtn.classList.add("hide");
  });
}

function sendDataToGraph() {
  console.log("dataFound");
}

//get 1 day start date and end date
function oneDay(date) {
  date.setDate(date.getDate() - 1);
  console.log("one day duration");
  return date;
}
//get 5 day start date and end date

function fiveDay(date) {
  date.setDate(date.getDate() - 5);
  console.log("five day duration");
  return date;
}

//get 1 months start date and end date

function oneMonth(date) {
  date.setMonth(date.getMonth() - 1);
  console.log("one month duration");
  return date;
}

//get 3 months start date and end date
function threeMonth(date) {
  console.log("3 month duration");
  date.setMonth(date.getMonth() - 3);
  return date;
}

//get 6 months start date and end date
function sixMonth(date) {
  console.log("6 month duration");
  date.setMonth(date.getMonth() - 6);
  return date;
}

// get 1 year date
function oneYear(date) {
  console.log("oneYear");
  date.setFullYear(date.getFullYear() - 1);
  return date;
}

//retruns current date in date and string format
function getCurrentDate() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDate = date.getDate();
  const dateFormat = currentYear + "-" + currentMonth + "-" + currentDate;
  return [dateFormat, date];
}
//change format
function changeFormat(mydate) {
  return mydate
    .toLocaleDateString()
    .replace(/\//g, "-")
    .split("-")
    .reverse()
    .join("-");
}

function handleDurationBtn(e) {
  const button = e.target;
  const buttonText = e.target.innerText;
  let startDate, endDate, interval, currentDate;
  durationButtons.forEach((btn) => {
    if (btn.className.includes("active")) {
      btn.classList.remove("active");
    }
  });
  button.classList.add("active");
  [currentDate, endDate] = getCurrentDate();

  const date = new Date(currentDate);

  // checking which btn is clicked
  if (buttonText == "1D") {
    startDate = oneDay(date);
    interval = "5M";
  } else if (buttonText == "5D") {
    startDate = fiveDay(date);
    interval = "30M";
  } else if (buttonText == "1M") {
    startDate = oneMonth(date);
    interval = "1D";
  } else if (buttonText == "3M") {
    startDate = threeMonth(date);
    interval = "1D";
  } else if (buttonText == "6M") {
    startDate = sixMonth(date);
    interval = "1D";
  } else if (buttonText == "1Y") {
    startDate = oneYear(date);
    interval = "1W";
  } else {
    // startDate = threeMonth(date);
  }
  startDate = changeFormat(startDate);
  endDate = changeFormat(endDate);

  console.log(startDate, endDate);
  sendDataToGraph(startDate, endDate, interval);
}

durationButtons.forEach((durationBtn) => {
  durationBtn.addEventListener("click", handleDurationBtn);
});
