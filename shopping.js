const inputField = document.getElementById('input')
const ul = document.getElementById('products')

function getValue() {
    const inputValue = inputField.value;
    if (!inputValue) {
        return;
    }
    // display product
    showData(inputValue)
    // get data to local storage
    const cartObj = getData()
    // set data
    setData(cartObj, inputValue)
    // clearing input field
    inputField.value = ''
}


function showData(name) {
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li)
}


function getData() {
    const cart = localStorage.getItem('cart')

    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart)
    } else {
        cartObject = {}
    }
    return cartObject;
}

function setData(cartObj, name) {
    if (cartObj[name]) {
        cartObj[name] += 1;
    } else {
        cartObj[name] = 1;
    }
    const cartStr = JSON.stringify(cartObj)
    localStorage.setItem('cart', cartStr)
}


function showDataFromStorage() {
    const cart = getData()
    for (const product in cart) {
        const li = document.createElement('li')
        li.innerText = product
        ul.appendChild(li)
    }

}

function purchase() {
    localStorage.removeItem('cart')
    ul.textContent = ''
}

showDataFromStorage()