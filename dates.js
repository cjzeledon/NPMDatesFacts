let chalk = require("chalk");
let moment = require("moment");

let fullTime = moment().format("LLLL");
let stringfullTime = "It is " + chalk.blue(fullTime) + ".";
console.log(stringfullTime);

let manyDays = moment().format("DDDo");
let stringManyDays = "It is the " + chalk.magenta(manyDays) + " day of the year.";
console.log(stringManyDays);

function MathSeconds (){
// let manySeconds = moment().format("SSSSSSSSS");
// console.log(manySeconds);
// let stringManySeconds = "It is " + chalk.cyan(manySeconds) + " seconds into the day.";
// console.log(stringManySeconds);

let hours = moment().format("H");
  // console.log(hours);
let minutes = moment().format("m");
  // console.log(minutes);
let seconds = moment().format("s");
  // console.log(seconds);

let calculateSeconds = (((parseFloat(hours) * 60) + parseFloat(minutes))* 60)+ parseFloat(seconds);
let stringDOUBLECHECKseconds = "It is " + chalk.cyan(calculateSeconds) + " seconds into the day. I'm DOUBLE CHECKED.";
  console.log(stringDOUBLECHECKseconds);


// let checkSECONDS = moment().format("SSS");
// console.log(checkSECONDS);
}
MathSeconds();
// 24hours * 60 minutes * 60 seconds = total

function YesDaylight (answer){
  let savingTime = moment().isDST();
  if (savingTime === true){
    savingTime = "is";
  } else {
    savingTime = "is not";
  }
  return savingTime;
}

  let stringSavingTime = "It " + chalk.green(YesDaylight()) + " during Daylight Savings Time."
  console.log(stringSavingTime);


function LeapYear (leaping){
  let leapingTime = moment().isLeapYear();
  if (leapingTime !== true){
   leapingTime = "is not";
  } else {
   leapingTime = "is";
  }
  return leapingTime;
}
  let stringLeapingTime = "It " + chalk.red(LeapYear()) + " a leap year."
  console.log(stringLeapingTime);
