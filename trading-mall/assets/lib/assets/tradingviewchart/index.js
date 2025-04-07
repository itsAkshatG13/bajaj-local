

const log = console.log;
const durationButtons = document.querySelectorAll(".duration-btn");



var x = window.matchMedia("(max-width: 575px)")
//rendering based on assets value





const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

const appId = urlParams.get("appId");
const endDate = urlParams.get("endDate");
const interval = urlParams.get("interval");
const startDate = urlParams.get("startDate");
const asset = urlParams.get("asset");
const exc = parseInt(urlParams.get("exc"));
const id = urlParams.get("id");
const token = parseInt(urlParams.get("token"));
const instrument = urlParams.get("instrument");
const streamSym = urlParams.get("streamSym");
const sessionID = urlParams.get("sessionID");
let chartColor = urlParams.get("chartColor");
chartColor=chartColor.replace(",","");
const chartHistoryURL = urlParams.get("historicalURL");
const chartDataURL = urlParams.get("intradayURL");
const chartInt = urlParams.get("chartInt");
const chartType = urlParams.get("chartType");
const accessToken = urlParams.get("accessToken");

const bgColor = chartColor=='dark' ? '#000000' : '#ffffff';
const bgTransparentColor = chartColor=='dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
const txtColor = chartColor=='dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)';
const greenColor = chartColor=='dark' ? '#068426' : '#06a578';
const redColor = chartColor=='dark' ? '#b10715' : '#ff6161';

var intervalCode = '1';

//console.log('chartColor',chartColor.replace(",",""));
//console.log(bgColor, bgTransparentColor, txtColor, greenColor, redColor);
//console.log('test print in index.js');
const chartProperties = {
 // width:1500,
  height:310,
  layout: {
  		backgroundColor: bgColor,
  		textColor: txtColor,
  	},

  	 priceScale: {

             scaleMargins: {
                 top: 0.40,
                 bottom: 0.25,
             },
  	 },
  	 timeScale: {
             rightOffset: 12,
             barSpacing: 8,
             fixLeftEdge: true,
             lockVisibleTimeRangeOnResize: true,

             visible: true,
             timeVisible: true,

             secondsVisible: false,

         },

}
const chartOptions = {

        layout:

            { background: { type: 'solid', color: bgColor },
              textColor: txtColor,
             },
      height:310,

        timeScale: {

            timeVisible: true,

            secondsVisible: false,

            ticksVisible: true

        },

        grid: {

            vertLines: {

                visible: false,

            },

            horzLines: {

                visible: false,

            },

        },

        crosshair: {

            vertLine: {

                color: '#6A5ACD',

                width: 0.5,

                style: 4, // 1.Solid; 2.Dotted; 3.Dashed; 4.LargeDashed; 5.SparseDotted

                visible: true,

                labelVisible: true,

            },

            horzLine: {

                color: '#6A5ACD',

                width: 0.5,

                style: 4, // 1.Solid; 2.Dotted; 3.Dashed; 4.LargeDashed; 5.SparseDotted

                visible: true,

                labelVisible: true,

            },

            mode: 2, // 1. Magnet; 2. Normal

        },

        handleScroll: {

            mouseWheel: true,

            pressedMouseMove: true,

            horzTouchDrag: true,

            vertTouchDrag: true,

        },

        handleScale: {

            axisPressedMouseMove: {

                time: true,

                price: true,

            },

            axisDoubleClickReset: true,

            mouseWheel: true,

            pinch: true,

        },

        overlayPriceScales: {

            autoScale: true,

            mode:0,

            invertScale: false,

            alignLabels: true,

            borderVisible: true,

            borderColor: '#2B2B43',

            entireTextOnly: false,

            visible: false,

            drawTicks: true,

            scaleMargins: {

                bottom: 0.1,

                top: 0.2,

            },

        },

    };

const domElement = document.getElementById('tvchart');
const domElement1 = document.getElementById('errorDiv');
const chart = LightweightCharts.createChart(domElement,chartOptions);
var candleSeries;
var buttonText = "1D";
var prevValue =1;

switch(chartType) {
  case 'line':
  candleSeries = chart.addLineSeries();
  candleSeries.applyOptions({
          color: chartInt=='0' ? greenColor : redColor,
          lineWidth: 1,
          lastPriceAnimation: 2,
          lineType: 0,
      });
    break;
  case 'area':
  candleSeries = chart.addAreaSeries();
  candleSeries.applyOptions({
      lineColor: chartInt=='0' ? greenColor : redColor,
      lineWidth: 1,
      lastPriceAnimation: 2,
      lineType: 0,
      bottomColor: bgTransparentColor,
      topColor: chartInt=='0' ? greenColor : redColor,
      });
    break;
    case 'bar':
    candleSeries = chart.addBarSeries();
    candleSeries.applyOptions({
       upColor: greenColor,
       downColor: redColor,
       });
    break;
  case 'candle':
  default:
  candleSeries = chart.addCandlestickSeries();
  candleSeries.applyOptions({
       upColor: greenColor,
       downColor: redColor,
       borderVisible: true,
       wickUpColor: greenColor,
       wickDownColor: redColor
       });
}

//euity, future,option

const isShowButton = false;


/*useEffect(() => {
    resizeObserver.current = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);*/
  if(chartColor=="dark"){
  const btnwrapper =document.querySelector(".duration-btn-wrapper");
  const body =document.querySelector("body");
  btnwrapper.style.background="#000000";
  body.style.background="#000000";
  }

if (asset=="option") {//
  //  myFunction(x);
  durationButtons.forEach((durationBtn) => {
  if (x.matches) {
   durationBtn.style.flex = "0";

    }

    if (!durationBtn.className.includes("day"))
      durationBtn.classList.add("hide");
  });
}
var myHeaders = new Headers();
//myHeaders.append("x-encrypt", "false");
//myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIGFwcDpyZWFkIGFwcDp3cml0ZSIsIlBlcm1pc3Npb25zIjoibnVsbCIsInVzZXJJZCI6Ik9OTDYwNjY1OSIsInVzZXJOYW1lIjoiT05MNjA2NjU5Iiwic291cmNlIjoid2ViLXBjIiwiaXNHdWVzdCI6Ik4iLCJuYmYiOjE3MjE3MTk0NjYsImV4cCI6MTcyMTgwNDA2NiwiaWF0IjoxNzIxNzE5NDY2fQ.WgxjdHZG3zixQwUhpu7ixKdCuCUM8BpIBjhmUnSFoe0");
myHeaders.append("Authorization", ("Bearer " + accessToken));
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({

    exchId: exc,
    fromDate: startDate.split('T')[0],
    interval: intervalCode,
    toDate: endDate.split('T')[0],
    token: token,
    token_symbol: ""
});


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};





fetch(chartDataURL, requestOptions)
  .then(response => response.json())
  .then(result =>{
    // if(buttonText=="1D" &&prevValue>=5){
    //   prevValue=1;
    // }
       //  if(result.data.chartData.length>0){
         prevValue=1;
      const cdata = result.data.chartData.map(d => {
                   var temp=Date.parse(d.split(',')[0]) / 1000;
                   var myStartDate = temp + 3 * 6500;
                  switch(chartType) {
                    case 'line':
                    case 'area':
                       return {
                       time:myStartDate,
                       value:parseFloat(d.split(',')[4]),
                       }
                      break;
                    case 'candle':
                    case 'bar':
                    default:
                       return {
                       time:myStartDate,
                       open: parseFloat(d.split(',')[1]),
                       high: parseFloat(d.split(',')[2]),
                       low: parseFloat(d.split(',')[3]),
                       close: parseFloat(d.split(',')[4]),
                       }
                  }
              });

              var filerData=[];
              cdata.filter((obj1)=>{
               if(filerData.findIndex(obj2 => (obj2.time === obj1.time)) ==-1){
                filerData.push(obj1);
               }
              })
                     candleSeries.setData(filerData);
                      chart.timeScale().scrollToRealTime();
                      chart.timeScale().scrollPosition();
           //  }
            // else{
              if(buttonText!="1D" &&result.data.chartData.length==0){
                domElement1.style.display="flex";
                domElement.style.display="none";
              }  
              else if(buttonText!="1D" &&result.data.chartData.length>0){
                domElement1.style.display="none";
                domElement.style.display="flex";
              }  
              else{
                if(buttonText=="1D" &&prevValue>=5 &&result.data.chartData.length==0){
                  domElement1.style.display="flex";
                  domElement.style.display="none";
                }
                else{
                  domElement1.style.display="none";
                  domElement.style.display="flex";
                }
              }
          
             if(buttonText=="1D" &&prevValue<=5){
                          handleNoDataForOneDay();

                               }
                      //         }
  }
  )
  .catch(error =>{
   console.log('error', error);
   if(buttonText=="1D" &&prevValue<=5){
    handleNoDataForOneDay();
//         url=chartDataURL;
//
//       startDate = prevDate(date,prevValue);
//        startDate = changeFormat(startDate);
//         endDate = changeFormat(endDate);
//
//          startDate=startDate+"T09:10:45.818ZZ";
//               endDate=endDate+"T23:55:45.800Z";
//               prevValue=prevValue+1;
//               sendDataToGraph(startDate, endDate, intervalCode, url);
        }
//   domElement1.style.display="flex";
//   domElement.style.display="none";
  }
  );
 // chart.timeScale().fitContent();

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}

var today = new Date();
var dd = today.getDate();
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();


var currentBusinessDay = { day: dd, month: mm, year: yyyy,hour:h,min:m,second:s };
var ticksInCurrentBar = 0;
var currentBar = {
	open: null,
	high: null,
	low: null,
	close: null,
	time: currentBusinessDay,
};

window.addEventListener("message", (event) => {
  if (event.data?.type === "mergeTickToBar") {
      const price = event.data.price;
      mergeTickToBar(price); 
  }
});
function mergeTickToBar(price) {
          if (ticksInCurrentBar == 20) {
                  // move to next bar
                  //currentIndex++;
                  currentBusinessDay = nextBusinessDay(currentBusinessDay);
                  currentBar = {
                    value: null,
                    time: currentBusinessDay
                  };
                  ticksInCurrentBar = 0;
                }
	if (currentBar.open === null) {
		currentBar.value = price;
		ticksInCurrentBar=ticksInCurrentBar+1;
	} else {
		currentBar.value = price;
		ticksInCurrentBar=ticksInCurrentBar+1;
	}
	//console.log('XDDD ',currentBar);
	candleSeries.update(currentBar);
}


 var lastCandleTime=0;
 var lastTradeTime=0;
 var lineData = {
 	value: null,
 	time: currentBusinessDay,
 };
 window.addEventListener("message", (event) => {
  if (event.data?.type === "mergeTickToBarV1") {
      const price = event.data.price;
      mergeTickToBarV1(price); 
  }
});

function mergeTickToBarV1(mOpen,mHigh,mLow,mClose) {
    const dates = new Date().getTime();


    const tradeTime = parseInt(dates);

         var myStartDate = Math.round(tradeTime/1000);

             var myStartDate = myStartDate + 3 * 6500;


	  if (tradeTime >= lastCandleTime) {

		currentBar.open = mOpen;
		currentBar.high = mOpen;
		currentBar.low = mOpen;
		currentBar.close = mOpen;

		currentBar.time= myStartDate;
		lastCandleTime = newBarTime(1).getTime();

	}
	else {
	    currentBar.open = currentBar.open;
		currentBar.close = mOpen;
		currentBar.high = Math.max(currentBar.high, mOpen);
		currentBar.low = Math.min(currentBar.low, mOpen);
		currentBar.time=currentBar.time;
		ticksInCurrentBar=ticksInCurrentBar+1;
	}
	candleSeries.update(currentBar);
	chart.timeScale().scrollToRealTime();
    chart.timeScale().scrollPosition();
//	chart.timeScale().fitContent()
}


 function mergeTickToLine(ltp) {

      //  console.log("ltp",ltp)

        const dates = new Date().getTime();

        const tradeTime = parseInt(dates);

        const myStartDate = Math.round(tradeTime/1000);

        const myStartDate2 = myStartDate + (3 * 6500);

        if (tradeTime >= lastTradeTime) {

            lineData.time = myStartDate2

            lineData.value = ltp

            lastTradeTime=newBarTime(1).getTime()

        } else {

            let time=lineData.time

            lineData.time = time

            lineData.value=ltp

        }




     //.log("startDate",myStartDate2)




        candleSeries.update(lineData);

        // chart.timeScale().scrollToRealTime();

        // chart.timeScale().scrollPosition();

        // chart.timeScale().fitContent()

    } 
    window.addEventListener("message", (event) => {
      if (event.data?.type === "setChartColor") {
        console.log("setchartstart");
          
          setChartColor(event.data.chartint); // Call the function
      }
  });

    function setChartColor(chartInt){
     switch(chartType) {
      case 'line':
      candleSeries.applyOptions({
          color: chartInt=='0' ? greenColor : redColor,
          lineWidth: 1,
          lastPriceAnimation: 2,
          lineType: 0,
          });
        break;
      case 'area':
      candleSeries.applyOptions({
          lineColor: chartInt=='0' ? greenColor : redColor,
          lineWidth: 1,
          lastPriceAnimation: 2,
          lineType: 0,
          bottomColor: 'rgba(255, 255, 255, 1)',
          topColor: chartInt=='0' ? greenColor : redColor,
          });
        break;
      case 'bar':
      candleSeries.applyOptions({
           upColor: greenColor,
           downColor: redColor,
           });
        break;
      case 'candle':
      default:
      candleSeries.applyOptions({
           upColor: greenColor,
           downColor: redColor,
           borderVisible: true,
           wickUpColor: greenColor,
           wickDownColor: redColor
           });
    }
    }
function newBarTime(min) {

const dates = new Date().getTime();
var futureDate = new Date(dates + min*60000);
  return futureDate;
}
function getNextDailyBarTime(barTime) {
      const date = new Date(barTime * 1000);
      date.setDate(date.getDate() + 1);
      return date.getTime() / 1000;
    }


function nextBusinessDay(time) {
      var d = new Date();
      d.setUTCFullYear(time.year);
      d.setUTCMonth(time.month);
      d.setUTCDate(time.day + 1);
      d.setUTCHours(0, 0, 0, 0);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate()
      };
    }


//function sendDataToGraph(startDate, endDate, interval,url) {
function sendDataToGraph(startDate, endDate, intervalCode, url) {
const urlParams = new URLSearchParams(window.location.search);
const appId = urlParams.get("appId");
/*const endDate = urlParams.get("endDate");
const interval = urlParams.get("interval");
const startDate = urlParams.get("startDate");*/
const asset = urlParams.get("asset");
const exc = urlParams.get("exc");
const id = urlParams.get("id");
const instrument = urlParams.get("instrument");
const streamSym = urlParams.get("streamSym");
const sessionID = urlParams.get("sessionID");
 var raw = JSON.stringify({
    exchId: exc,
    fromDate: startDate.split('T')[0],
    interval: intervalCode,
    toDate: endDate.split('T')[0],
    token: token,
    token_symbol: ""
 });

 var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
 };

 fetch(url, requestOptions)
   .then(response => response.json())
   .then(result =>{
    // if(buttonText=="1D" &&prevValue>=5){
    //   prevValue=1;
    // }
 // console.log('api result 2 ',raw);

          // if(result.data.chartData.length>0){


    const cdata = result.data.chartData.map(d => {

                 var temp=Date.parse(d.split(',')[0]) / 1000;
                 var myStartDate = temp + 3 * 6500;

                switch(chartType) {
                  case 'line':
                  case 'area':
                     return {
                     time:myStartDate,
                     value:parseFloat(d.split(',')[4]),
                     }
                    break;
                  case 'candle':
                  case 'bar':
                  default:
                     return {
                     time:myStartDate,
                     open: parseFloat(d.split(',')[1]),
                     high: parseFloat(d.split(',')[2]),
                     low: parseFloat(d.split(',')[3]),
                     close: parseFloat(d.split(',')[4]),
                     }
                }
            });
          // var slicedArray = cdata.length>300?cdata.slice(0, 280):cdata;
           try {

            var filerData=[];
            cdata.filter((obj1)=>{
             if(filerData.findIndex(obj2 => (obj2.time === obj1.time)) ==-1){
              filerData.push(obj1);
             }
            })
            candleSeries.setData(filerData);
            chart.timeScale().scrollToRealTime();
            chart.timeScale().scrollPosition();
           } catch (error) {
            console.log('error', error)
           }
          // }
       //  else{

       if(buttonText!="1D" &&result.data.chartData.length==0){
        domElement1.style.display="flex";
        domElement.style.display="none";
      }  
      else if(buttonText!="1D" &&result.data.chartData.length>0){
        domElement1.style.display="none";
        domElement.style.display="flex";
      }  
      else{
        if(buttonText=="1D" &&prevValue>=5 &&result.data.chartData.length==0){
          domElement1.style.display="flex";
          domElement.style.display="none";
        }
        else{
          domElement1.style.display="none";
          domElement.style.display="flex";
        }
      }
      if(result.data.chartData.length==0 &&result.data.chartData.length==0&buttonText=="1D" &&prevValue<=5){
            handleNoDataForOneDay();

                }
      //   }


   }
   )

   .catch(error =>
    {
     console.log('error', error)
     if(buttonText=="1D" &&prevValue<=5){
      handleNoDataForOneDay();
//      url=chartDataURL;
//
//    startDate = prevDate(date,prevValue);
//     startDate = changeFormat(startDate);
//      endDate = changeFormat(endDate);
//
//       startDate=startDate+"T09:10:45.818ZZ";
//            endDate=endDate+"T23:55:45.800Z";
//            prevValue=prevValue+1;
//            sendDataToGraph(startDate, endDate, intervalCode, url);
     }
//       domElement1.style.display="flex";
//       domElement.style.display="none";
    }


   );
}

//get 1 day start date and end date
function oneDay(date) {
  date.setDate(date.getDate());
 // console.log("one day duration");
  return date;
}

function prevDate(date, value) {
  date.setDate(date.getDate()-value);
 // console.log("one day duration");
  return date;
}
//get 5 day start date and end date

function fiveDay(date) {
  date.setDate(date.getDate() - 5);
 // console.log("five day duration");
  return date;
}

//get 1 months start date and end date

function oneMonth(date) {
  date.setMonth(date.getMonth() - 1);
 // console.log("one month duration");
  return date;
}

//get 3 months start date and end date
function threeMonth(date) {
 // console.log("3 month duration");
  date.setMonth(date.getMonth() - 3);
  return date;
}

//get 6 months start date and end date
function sixMonth(date) {
  //console.log("6 month duration");
  date.setMonth(date.getMonth() - 6);
  return date;
}

// get 1 year date
function oneYear(date) {
  //console.log("oneYear");
  date.setFullYear(date.getFullYear() - 1);
  return date;
}
function threeYear(date) {
  //console.log("oneYear");
  date.setFullYear(date.getFullYear() - 3);
  return date;
}
//retruns current date in date and string format
function getCurrentDate() {
  const date = new Date();
  const currentYear = date.getFullYear();
  var currentMonth = date.getMonth() + 1;
  var currentDate = date.getDate();

  var month=currentMonth<10?'0'+currentMonth:currentMonth;
  var day=currentDate<10?'0'+currentDate:currentDate;
  const dateFormat = currentYear + "-" + month + "-" + day;

  //console.log('month',dateFormat);
  return [dateFormat, date];
}
//change format
function changeFormat(mydate) {
  const currentYear = mydate.getFullYear();
    const currentMonth = (mydate.getMonth() + 1).toString().padStart(2,'0');
    const currentDate = (mydate.getDate()).toString().padStart(2,'0');
    const dateFormat = currentYear + "-" + currentMonth + "-" + currentDate;
    return dateFormat;
}

function handleDurationBtn(e) {
 console.log("printvalue");
 console.log(e);
  const button = e.target;
   buttonText = e.target.innerText;
  let startDate, endDate, interval, currentDate;
  durationButtons.forEach((btn) => {
    if (btn.className.includes("active")) {
      btn.classList.remove("active");
    }
  });
  button.classList.add("active");

  [currentDate, endDate] = getCurrentDate();

  const date = new Date(currentDate);
// console.log("date  1",currentDate);
// console.log("date  1",date);


var url ="";
  // checking which btn is clicked
prevValue=1;
  if (buttonText == "1D") {

  url=chartDataURL;

    startDate = oneDay(date);
     startDate = changeFormat(startDate);
      endDate = changeFormat(endDate);

       startDate=startDate+"T09:10:45.818ZZ";
            endDate=endDate+"T23:55:45.800Z";

  } else if (buttonText == "5D") {
    url=chartDataURL;
    startDate = fiveDay(date);

     startDate = changeFormat(startDate);

      endDate = changeFormat(endDate);
      startDate=startDate+"T09:23:13.002Z";
      endDate=endDate+"T09:07:00.000Z";

  }
   else if (buttonText == "1M") {
    url=chartDataURL;
    startDate = oneMonth(date);
     startDate = changeFormat(startDate);
      endDate = changeFormat(endDate);
      startDate= startDate+"T00:00:00.000Z";
        endDate=endDate+"T00:00:00.000Z";

  }
   else if (buttonText == "3M") {
     url=chartHistoryURL;
    startDate = threeMonth(date);
     startDate = changeFormat(startDate);
      endDate = changeFormat(endDate);
      startDate= startDate+"T00:00:00.000Z";
        endDate=endDate+"T00:00:00.000Z";
  }
   else if (buttonText == "6M") {
        url=chartHistoryURL;

    startDate = sixMonth(date);
     startDate = changeFormat(startDate);
      endDate = changeFormat(endDate);
      startDate= startDate+"T00:00:00.000Z";
           endDate=endDate+"T00:00:00.000Z";
  }
   else if (buttonText == "1Y") {


         url=chartHistoryURL;

    startDate = oneYear(date);
     startDate = changeFormat(startDate);
      endDate = changeFormat(endDate);
      startDate= startDate+"T00:00:00.000Z";
              endDate=endDate+"T00:00:00.000Z";

  }
   else {
      /* interval = "1day";
        startDate = threeYear(date);
         endDate = changeFormat(endDate);
     startDate = changeFormat(startDate);
      endDate = changeFormat(endDate);
      startDate= startDate+"T00:00:00.000Z";
      endDate=endDate+"T00:00:00.000Z";*/

  }





    switch(buttonText){
      case '1D':
      intervalCode = "1";
        break;
      case '5D':
      intervalCode = "5";
        break;
      case '1M':
      intervalCode = "30";
        break;
      case '3M':
      intervalCode = "60";
        break;
      case '6M':
      intervalCode = "120";
        break;
      case '5Y':
      intervalCode = "W";
       case '1Y':
      intervalCode = "W";
        break;
    }

  //console.log(startDate,endDate,interval);
//  sendDataToGraph(startDate, endDate, interval,url);
  sendDataToGraph(startDate, endDate, intervalCode, url);

}

function handleNoDataForOneDay(){
//const button = e.target;
  // buttonText = e.target.innerText;
  let startDate, endDate, interval, currentDate;
//  durationButtons.forEach((btn) => {
//    if (btn.className.includes("active")) {
//      btn.classList.remove("active");
//    }
//  });
//  button.classList.add("active");

  [currentDate, endDate] = getCurrentDate();

  const date = new Date(currentDate);
   intervalCode = "1";
  if(prevValue<=5){
                     url=chartDataURL;

                   startDate = prevDate(date,prevValue);
                    startDate = changeFormat(startDate);
                     endDate = changeFormat(endDate);

                      startDate=startDate+"T09:10:45.818ZZ";
                           endDate=endDate+"T23:55:45.800Z";
                           prevValue=prevValue+1;
                           sendDataToGraph(startDate, endDate, intervalCode, url);
                    }
}

durationButtons.forEach((durationBtn) => {
  durationBtn.addEventListener("click", handleDurationBtn);
});
