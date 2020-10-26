/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
 */

 const firstListItem = document.querySelector("li");
 console.log(firstListItem);

 const myId = document.querySelector("#myId");
 console.log(myId);

 const groupOfListItems = document.querySelectorAll("li");
 console.log([...groupOfListItems]);

 const bgWarning = document.querySelectorAll(".bg-warning");
 console.log([...bgWarning]);

 const bgSuccess = document.querySelectorAll(".bg-success>div.col");
 console.log([...bgSuccess]);

 const dataTargetMe = document.querySelectorAll("[data-target-me]");
 console.log([...dataTargetMe]);