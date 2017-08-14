console.log("I'm absolutely working fine here!");

chalk = require("chalk");
moment = require("moment");

// How to use moment variable, use moment().format();

define(['moment'], function (moment) {
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'
});
