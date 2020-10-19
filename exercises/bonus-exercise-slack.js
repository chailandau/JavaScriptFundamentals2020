
  let evenOrOdd = (num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

let myFilter = (my_array, callback) => {
  let new_array = [];

my_array.forEach( (num) => {
if (callback(num) === true) {
  new_array.push(num);
} else {
  return "No even numbers";
}});
return new_array;
};

console.log(myFilter([1,2,3,4,5,6], evenOrOdd));
