const btn = document.querySelector('.add');
const list = document.querySelector('ul');
const form = document.querySelector('.addTask');

/* When button is clicked, create new li.
 * Add content to created li.
 * Append the new li to end of ul.
 * 
 * No longer needed.
btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = 'Added.';
    list.append(li);
});
*/

/*
* When the list item is clicked, delete it from DOM. 
*/
list.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }
});

/*
 * Allow users to add their own To-Do.
 */
form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent page reload on submission.

    const li = document.createElement('li');
    li.innerText = String(form.task.value);
    list.append(li);
});