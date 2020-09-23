const beep = function (beepTimes) {
  if (beepTimes.length === 0) {
    return;
  }
  let beepTimesInMs = [];
  for(let i = 0; i < beepTimes.length; i++) {
    if (beepTimes[i] < 0 || beepTimes[i] === NaN) {
      break;
    }
    beepTimesInMs.push(beepTimes[i] * 100);
  }
  for (let j = 0; j < beepTimesInMs.length; j++) {
    setTimeout (function () {
      process.stdout.write('\x07');
      console.log("hi");
      beep(j);
    }, beepTimesInMs[j]);
  }
}

beep(process.argv.slice(2));