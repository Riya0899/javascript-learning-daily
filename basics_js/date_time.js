// Dates
let mydate = new Date();
console.log(mydate);                       // Logs the current date and time
console.log(mydate.toISOString());         // Logs the date in ISO format (e.g., 2025-01-15T10:15:30.000Z)
console.log(mydate.toLocaleString());      // Logs the current date and time in the local format
console.log(typeof mydate);                // Logs "object" because mydate is a Date object

let newdate = new Date(2023, 2, 23, 4, 3); // Create a new Date object: March 23, 2023, 04:03 AM
console.log(newdate.toLocaleString());    // Logs the localized date and time for newdate

let another = new Date("2023-12-12");     // Create a Date object for December 12, 2023
console.log(another.toLocaleDateString()); // Logs the localized date string of another

let mytimestamp = Date.now();             // Gets the current timestamp in milliseconds
console.log(mytimestamp);                  // Logs the current timestamp (milliseconds since Jan 1, 1970)
console.log(newdate.getTime());            // Logs the time of newdate in milliseconds since Jan 1, 1970

console.log(Math.floor(Date.now() / 1000)); // Logs the current timestamp in seconds (rounded down)

mydate = new Date(); // Re-assign mydate to the current date and time

// Formatting mydate to show a 24-hour cycle and using `day` for the current day of the month
console.log(mydate.toLocaleString('default', {
    hourCycle: 'h23',    // Use a 24-hour cycle
    weekday: 'long',     // Specify long weekday format
    year: 'numeric',     // Specify numeric year format
    month: 'long',       // Specify long month format
    day: 'numeric',      // Specify numeric day format
}));
