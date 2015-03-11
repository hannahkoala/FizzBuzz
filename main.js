function fizzBuzz(i){
  var result = "";
  if (!(i%3)) {result += "Fizz"};
  if (!(i%5)) {result += "Buzz"};
  if (result === ("")) {result = i};
  return result
};

for(var i = 1; i <= 100; i++){
  console.log(fizzBuzz(i));;
};
