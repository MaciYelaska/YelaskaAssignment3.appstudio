let cities = []
let stop = 'Stop'
let i = 0
let text = ""
city = prompt("Enter a city of your choice (to stop type: Stop)")

while (city != 'Stop') {
    cities.push(city)
    let city = prompt("Enter another city or type Stop to end")
    }
    
let lowerCities = cities.map(cities => cities.toLowerCaes())
while (i < cities.length){
  console.log(lowerCities.join('\r\n'))
  i++
}