// function appendToParent(parent, childTagType, text) {
//   const par = document.getElementById(parent);
//   const child = document.createElement(childTagType);
//   child.textContent = text;
//   par.appendChild(child);
// }
// // appendToParent("elem", "li", "Ironman");

// function generateSortedList(arr) {
//   arr.sort((a, b) => a - b);
//   arr.forEach((element) => {
//     appendToParent("table", "li", element);
//   });
//   // console.log(arr);
// }

function showGreeting(name) {
  console.log("Hello " + name + "!");
}

setTimeout(showGreeting, 3000, "akshay");


// generateSortedList([25, 58, 18, 12]);
