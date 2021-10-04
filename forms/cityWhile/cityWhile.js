let cities = []

let i = 0

let doneWithCities = false

while (doneWithCities == false) {
    let city = prompt("Enter the next city: ")
    cities.push(city.toLowerCase())
    doneWithCities = confirm("Are you done with cities? Press OK to Stop")
}

while (i < cities.length){
  console.log(cities[i])
  i++
}