// Write your code in this file!

function scuberGreetingForFeet(someNumber) {
  //everything I want my function to do I put inside these curly braces
  //in this example, lets say I want my function, addFive, to add 5 to any number I pass in (someNumber), but only IF the number is greater than zero
  let result
  if (someNumber <= 400) {
    result = "This one is on me!";
  }
   if (someNumber > 2000) {
    result = "I will gladly take your thirty bucks.";
  }
  if (someNumber > 2500) {
    result = "No can do.";
  }
  'I will gladly take your thirty bucks.'
  //at the end, if I want my function to return something, I need to state it:
  return result
}

function ternaryCheckCity(city) {
   return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  if (tip == 'generous') {
  return 'Thank you so much.';}
  else if (tip == 'not as generous') {
    reutrn 'Thank you.';}
  else if (tip == 'anything else' {
    return 'Bye.';}
}
