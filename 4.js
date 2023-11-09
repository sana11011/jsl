function checkSeason(month) {
  if ((month >= 1 && month <= 2) || month === 12) {
    return "Winter";
  } else if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}

let currentMonth = 7;
let currentSeason = checkSeason(currentMonth);
console.log(`We are currently in ${currentSeason}.`);
