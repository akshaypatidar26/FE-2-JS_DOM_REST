//Event Listener on GrandParent
document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent Clicked");
});

//Event Listener on Parent
document.getElementById("parent").addEventListener("click", (e) => {
  //e.stopPropagation();
  console.log("Parent Clicked");
});

//NO Event Listener on Child!
