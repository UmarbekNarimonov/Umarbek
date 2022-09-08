
let massiv = []
let row = document.querySelector(".row")
let gacha_in = document.querySelector(".gacha2")
let dan_in = document.querySelector(".dan2")

getData()

async function getData() {
    let baza = await fetch("http://myjson.dit.upm.es/api/bins/bq32")
        .then(ress => {
            return ress.json();
        })
        .catch(err => {
            return err.json();
        })

    massiv = baza
    cardMade(baza)
}



function cardMade(baza) {
    baza.map(arr =>{
        let col_4 = document.createElement("div")
        col_4.classList.add("col-3")
        col_4.classList.add("mt-4")
    
        let card = document.createElement("div")
        card.classList.add("card"  , "text-center")

    
    
        let rasm = document.createElement("img")
        rasm.src = arr.img_src
        rasm.alt = arr.name
    
        let tittle = document.createElement("h3")
        tittle.innerText = arr.name
    
        let price = document.createElement("p")
        price.innerText = arr.cost + "$"
    
        let btn = document.createElement("button")
        btn.classList.add("btn", "btn-primary")
        btn.innerText = "Sotib olish"
        // btn.setAttribute("onclick" , `buySoat(${count})`)
    
        card.appendChild(rasm)
        card.appendChild(tittle)
        card.appendChild(price)
        card.appendChild(btn)
        col_4.appendChild(card)
        row.appendChild(col_4)
    })
}


function qidir(params) {
    console.log(params.value);
    let qidiruv = massiv.filter((arr)=>{
        return arr.name.toLowerCase().includes(params.value)
    })
    natija(qidiruv)
}


function natija(params) {
    row.innerHTML = ""
    params.map(arr =>{
        let col_4 = document.createElement("div")
        col_4.classList.add("col-3")
        col_4.classList.add("mt-4")
    
        let card = document.createElement("div")
        card.classList.add("card")

    
    
        let rasm = document.createElement("img")
        rasm.src = arr.img_src
        rasm.alt = arr.name
    
        let tittle = document.createElement("h3")
        tittle.innerText = arr.name
    
        let price = document.createElement("p")
        price.innerText = arr.cost + "$"
    
        let btn = document.createElement("button")
        btn.classList.add("btn", "btn-primary")
        btn.innerText = "Sotib olish"
        // btn.setAttribute("onclick" , `buySoat(${count})`)
    
        card.appendChild(rasm)
        card.appendChild(tittle)
        card.appendChild(price)
        card.appendChild(btn)
        col_4.appendChild(card)
        row.appendChild(col_4)
    })
    
}

function gacha() {
    let filter_mas = massiv.filter((arr)=>{
        return arr.cost >= dan_in.value && arr.cost <= gacha_in.value
    })
     gacha_nat(filter_mas)
}

function gacha_nat(params) {
    row.innerHTML = ""
    params.map(arr =>{
        let col_4 = document.createElement("div")
        col_4.classList.add("col-3")
        col_4.classList.add("mt-4")
    
        let card = document.createElement("div")
        card.classList.add("card")

    
    
        let rasm = document.createElement("img")
        rasm.src = arr.img_src
        rasm.alt = arr.name
    
        let tittle = document.createElement("h3")
        tittle.innerText = arr.name
    
        let price = document.createElement("p")
        price.innerText = arr.cost + "$"
    
        let btn = document.createElement("button")
        btn.classList.add("btn", "btn-primary")
        btn.innerText = "Sotib olish"
        // btn.setAttribute("onclick" , `buySoat(${count})`)
    
        card.appendChild(rasm)
        card.appendChild(tittle)
        card.appendChild(price)
        card.appendChild(btn)
        col_4.appendChild(card)
        row.appendChild(col_4)
    })
    
}