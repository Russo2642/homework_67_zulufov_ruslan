let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
console.log(param);

function getCharacter() {
    fetch(`https://rickandmortyapi.com/api/character/${param}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
            episod(data)
        })
}
getCharacter()

function setData (data) {
    let div = document.createElement('div')
        div.innerHTML = `
            <img src="${data.image}" alt="">
            <div class="content-main">
                <h3><span>Name</span>: ${data.name}</h3>
                <h3><span>Gender</span>: ${data.gender}</h3>
                <h3><span>Species</span>: ${data.species}</h3>
                <h3><span>Status</span>: ${data.status}</h3>
            </div>
        `

    document.querySelector('.content').append(div)
}

function episod(data) {
    data.episode.forEach(element => {
        let a = document.createElement('a')
            a.setAttribute('href', `${element}`)
            a.innerHTML = element

        document.querySelector('.episode').append(a)
    });
}