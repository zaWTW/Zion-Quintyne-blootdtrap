//console. log("Zion Quintyne")

//var prompt = prompt('What is your name?')

//console.log(prompt)

function verifyage(age) {
  var age = prompt('What is your age?');

  if (age < 18 && typeof age === "string") {
    alert('You are a minor!');
  } else if (age >= 18 && age <= 60) {
    alert('You a grown a$$ man!')
  } else {
    alert('Dam you are old!')
  }
}
