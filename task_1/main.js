let button = document.querySelector('input')
let container = document.querySelector('.container')

button.addEventListener('click', function() {
    let div = document.createElement('div')
        container.append(div)
    
    addNotify()
})

function addNotify() {
    let div = document.createElement('div')

    let close = document.createElement('button')
    close.innerHTML = '&#10005;'

    let text = document.createElement('span')
    text.innerHTML = 'Добавлено'

    div.append(close)
    div.prepend(text)
    document.querySelector('.notify').append(div)
    
    setTimeout( () => {
        div.remove()
    }, 5000)

    close.addEventListener('click', function() {
        this.parentNode.remove()
    })
}