/*
const request = require("sync-request")
const ical = require('ical');



var cal = request("GET", "https://calendar.google.com/calendar/ical/2d96791a0d015d70dce93682e3d37e89b794b6627694c6001168e29a6300c069%40group.calendar.google.com/public/basic.ics").getBody("utf8")
const data = ical.parseICS(cal);
for (let k in data) {
    if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == 'VEVENT') {
            if (new Date() < ev.start)
            module.exports = {
                text: `${ev.summary} is in/at ${(ev.location.trim() != "" && ev.location) ? ev.location : "room 406"  } on ${ev.start.toLocaleString('en-US', { timeZone: 'America/New_York', timeStyle: "short", dateStyle: "long" })}`
            } 
            else 
            module.exports = {
                text: `${ev.summary} is in/at ${(ev.location.trim() != "" && ev.location) ? ev.location : "room 406"  } on ${ev.start.toLocaleString('en-US', { timeZone: 'America/New_York', timeStyle: "short", dateStyle: "long" })}`
            } 
        }
    }
}

*/