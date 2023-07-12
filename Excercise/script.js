function changeElement() {
  let tagElement = document.getElementById("select-tag").value; // select tag value
  let color = document.getElementById("color-picker").value; // select color value
  let textarea = document.getElementById("textarea").value; // select text from textarea
  let addBtn = document.getElementById("add-element"); // submit button
  let buttonContainer = document.getElementById("button-container"); // parent container of buttons

  let tag = document.createElement(tagElement); // create tag based on the value of tagElement
  tag.setAttribute("class", "inner-text"); // assign class to the tag element
  tag.textContent = textarea; // put text inside the tag element
  tag.style.color = color; // apply color to the tag element
  tag.style.cursor = "pointer"; // set cursor to pointer

  // create edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.display = "none"; // initialize with display "none"
  // create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.display = "none"; // initialize with display "none"

  // append these both button to parent button container
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  // append tag to element-container
  document.getElementById("elements-container").appendChild(tag);

  document.getElementById("textarea").value = ""; // after tag value assign then clear textarea value
  tag.addEventListener("click", handleElementClick); // apply onClick event to each child elements

  function handleElementClick(event) {
    event.stopPropagation(); // not trigger any event handlers on parent elements
    // refill all the value in each tag
    document.getElementById("color-picker").value = rgbToHex(color);
    document.getElementById("textarea").value = textarea;

    // when click triggers then edit and delete button will be visible and add button will be hidden
    editBtn.style.display = "block";
    deleteBtn.style.display = "block";
    addBtn.style.display = "none";
    document.getElementById("select-tag").style.display = "none";
  }
  
  editBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    // update value according to current value and change value accordingly
    tag.textContent = document.getElementById("textarea").value;
    tag.style.color = document.getElementById("color-picker").value;
    textarea = tag.textContent;
    color = tag.style.color;
    
    document.getElementById("textarea").value = "";
    addBtn.style.display = "block";
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
    document.getElementById("select-tag").style.display = "initial";
  });
  // for delete particular element
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    tag.remove();
    document.getElementById("textarea").value = "";
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";
  });

  // this method convert rgb color to hex color
  function rgbToHex(rgbColor) {
    const rgbValues = rgbColor.match(/\d+/g);
    const hexColor = "#" + rgbValues.map(value => {
      const hex = parseInt(value).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
    return hexColor;
  }
  
}
