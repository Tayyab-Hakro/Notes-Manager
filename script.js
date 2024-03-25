// Get references to HTML elements
const saveNoteBtn = document.getElementById("saveNoteBtn");
const noteTextarea = document.getElementById("noteTextarea");
const preview = document.getElementById("preview");

// Function to save note
function saveNote() {
    const noteContent = noteTextarea.value;
    
    // Create a new paragraph element to display the note
    const noteElement = document.createElement("p");
    noteElement.textContent = noteContent;
    
    // Append the note element to the preview div
    preview.appendChild(noteElement);
    
    // Clear the textarea after saving the note
    noteTextarea.value = "";
}

// Add event listener to the save note button
saveNoteBtn.addEventListener("click", saveNote);
