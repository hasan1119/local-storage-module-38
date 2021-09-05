const getCartData = () => {
    const cart = getCart()
    for (const product in cart) {
        displayProduct(product)
    }
}



const addItem = () => {
    const inputField = document.getElementById('input')
    const inputValue = inputField.value;
    if (!inputValue) {
        return
    }
    // display into ui
    displayProduct(inputValue)
    // add to local storage
    addProductToCart(inputValue)
    inputField.value = ''
}


const displayProduct = name => {
    const ul = document.getElementById('product')
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li)
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    var cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] += 1;
    } else {
        cart[name] = 1;
    }

    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

function placeOrder() {
    const ul = document.getElementById('product')
    ul.textContent = ''
    localStorage.removeItem('cart')
}

getCartData()