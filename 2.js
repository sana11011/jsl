let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capitals = ["Beijing", "Tokyo", "Seoul", "Hanoi", "Kuala Lumpur"];

if (countries.length !== capitals.length) {
  console.log("Arrays do not have the same length.");
} else {
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let capital = capitals[i];
    console.log(`Your country: ${country} has the capital named: ${capital}.`);
  }
}
