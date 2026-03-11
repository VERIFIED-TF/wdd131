// 1. Reference the elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Add an event listener to the button
button.addEventListener('click', () => {
    // Check if the input is empty before adding
    if (input.value.trim() !== '') {
        
        // 3. Create the elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 4. Populate the content
        li.textContent = input.value;
        deleteButton.textContent = 'x';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // 5. Build the list item
        li.append(deleteButton);
        list.append(li);

        // 6. Add the delete functionality
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus(); // Sends the cursor back to the input box
        });

        // 7. Clear the input and refocus
        input.value = '';
        input.focus();
    } else {
        // If empty, just put the cursor back in the box
        input.focus();
    }
});