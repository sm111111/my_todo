const resultInput = document.getElementById('result');
const addbutton = document.getElementById('addbutton');
const textInput = document.getElementById('text');

addbutton.addEventListener('click', function () {
    const userInput = textInput.value;
    if (userInput.trim() === '') 
        return;

    const newLine = document.createElement('li');

    // Create a span for the text
    const textSpan = document.createElement('span');
    textSpan.textContent = userInput;

    // Create buttons
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="bi bi-pencil-square new-class"></i>';

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="bi bi-trash-fill new-class"></i>'; // Add icon to Remove button

    // Edit button functionality
    editButton.addEventListener('click', function () {
        const updatedInput = prompt('Edit your item:', textSpan.textContent);
        if (updatedInput !== null && updatedInput.trim() !== '') {
            textSpan.textContent = updatedInput;
        }
    });

    // Remove button functionality
    removeButton.addEventListener('click', function () {
        newLine.remove();
    });

    // Append the text and buttons to the list item
    newLine.appendChild(textSpan);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(removeButton);
    
    newLine.appendChild(buttonContainer);
    resultInput.appendChild(newLine);

    textInput.value = ''; // Clear the input field after adding
});
