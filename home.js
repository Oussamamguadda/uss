function loadB({ image, title, price }) {
    const Bcard = document.createElement('div item')
    Bcard.setAttribute('class', 'col-4 p-3')

    const Bimage = document.createElement('img')
    Bimage.src = image

    const Bimagecontainer = document.createElement('div')
    Bimagecontainer.setAttribute('class', 'courses-image-wrapper divImg')
    Bimagecontainer.append(Bimage)

    Bcard.appendChild(Bimagecontainer)

    const Btitle = document.createElement('h3')
    Btitle.setAttribute('class', 'mt-2 text-center')
    Btitle.innerText = title
    Bcard.appendChild(Btitle)

    const Bprice = document.createElement('span')
    Bprice.setAttribute('class', 'd-block text-center')
    Bprice.innerText = price
    Bcard.appendChild(Bprice)

    document.querySelector("#courses-container .row").append(Bcard)
}

const selectedB = [];

for (let i = 0; i < 3; i++) {
    let bookey = courses[Math.floor(Math.random() * courses.length)]
    while (selectedB.includes(bookey)) {
        bookey = courses[Math.floor(Math.random() * courses.length)]
    }
    selectedB.push(bookey)
    loadB(bookey)
}


