function populateUFs(){

    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    // .then( (res) => {return res.json() })
    .then(res => res.json() )
    .then( states => {
        for( const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event){

    const citiesSelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citiesSelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citiesSelect.disabled = true

    fetch(url)
    // .then( (res) => {return res.json() })
    .then(res => res.json() )
    .then( cities => {
        for( const city of cities ){
            citiesSelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

    })
    citiesSelect.disabled = false
    // console.log()
}

document.querySelector("select[name=uf]")
.addEventListener("change", getCities)


//itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //add or remove class in JS
    //classList.add() our classList.remove()
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound;
    })

    if( alreadySelected >= 0 ) {

        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems;
}
