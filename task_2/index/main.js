let container = document.querySelector('.container')

function getData() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            createCard(data)
        })
}
getData()

function createCard(data) {
    data.results.forEach(element => {
        let a = document.createElement('a')
            a.classList.add('card')
            a.setAttribute('href', `character.html?id=${element.id}`)
            a.innerHTML = `
                <img src=${element.image}>
                <h3>${element.name}</h3>
            `
        container.append(a)
    });
}