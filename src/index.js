function handleComment(todo) {
    let ul = document.createElement('li')
    ul.textContent = todo
    document.querySelector('#comments-list').appendChild(ul)
}