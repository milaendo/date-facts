const moment = require('moment')
const chalk = require('chalk')
 

let now = moment().format(" ddd MM-DD-YYYY H:mm a")
console.log("it is" + chalk.green(now))

let day = moment().format('DDD')
console.log("it is the " + chalk.cyan(day) + "th of the year")

let second = moment().format('SSSSS')
console.log("it is " + chalk.red(second) +" seconds into the day")

let daylight = moment().isDST()
	if(daylight === true)
console.log("it " +chalk.yellowBright('is')+ " during daylight savings time")

let leap = moment().isLeapYear()
	if(leap === false)
console.log("it " +chalk.blueBright('is not')+ " a leap year")