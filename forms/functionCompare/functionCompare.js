let states = ["Nebraska", "Iowa", "Minnesota", "South Dakota", "North Dakota", "Kansas", "Oklahoma", "Texas"]

states.reverse()

for(let i = 0; i < states.length; i++) {
  console.log(states[i])
  }

let pass1 = prompt('Enter your new Password')
let pass2 = prompt('Reenter your new Password')

function passCompare(pass1,pass2){
  return pass1.localeCompare(pass2)
  }

let compare = passCompare(pass1, pass2)

if (compare == 0) {
  console.log("The passwords are the same.")
}
else{
  console.log("The passwords are not the same. ")
  }