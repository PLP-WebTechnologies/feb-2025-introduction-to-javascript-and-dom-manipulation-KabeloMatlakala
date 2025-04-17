// Change text content dynamically
function changeText() {
  const heading = document.getElementById("main-heading");
  const intro = document.getElementById("intro");

  heading.textContent = "You clicked the button!";
  intro.style.color = "blue";
  intro.style.fontWeight = "bold";
}

// Add or remove a box dynamically
function toggleBox() {
  const container = document.getElementById("box-container");
  const existingBox = document.querySelector(".box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
  }
}
