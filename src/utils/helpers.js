// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

// Move to utils after
export function convertToSeconds (hours, minutes, seconds){
  return seconds + minutes * 60 + hours * 60 * 60;
}
// interval timer used for stopwatches
export function getIntervalTimer(myFunction){

  return setInterval(myFunction, 1000);
}
