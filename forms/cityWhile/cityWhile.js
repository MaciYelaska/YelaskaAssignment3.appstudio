let cities = []
let stop = 'Stop'
let i = 0
let text = ""
city = prompt('Input a city of your choosing (to stop type: Stop)')


while (city != 'Stop') {
  cities.push(city)
  city = prompt('Enter another city or type Stop to end')
  }
 

let lowerCities = cities.map(cities => cities.toLowerCase())
while (i < cities.length) {
  console.log(lowerCities.join('\r\n'))
  i++
}