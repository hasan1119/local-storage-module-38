const productInput = document.getElementById('product-name')
const purchaseBtn = document.getElementById('purchase-btn')
const products = document.getElementById('products')

productInput.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        const productName = productInput.value;
        if (!productName) {
            return;
        }
        // add to list in ui
        addToList(productName)
        // set data to storage
        setData(productName)
        //clearing value
        productInput.value = ""
    }
})

// add to list in UI
const addToList = (name) => {
    const li = document.createElement('li')
    li.innerText = name;
    products.appendChild(li)
}



// set item to storage
const setData = (name) => {
    // get data from storage
    const cart = getData()
    if (cart[name]) {

        cart[name] += 1;
    } else {
        cart[name] = 1;
    }

    const cartStr = JSON.stringify(cart)
    localStorage.setItem('cart', cartStr)
    console.log(cart);
}



// get data from storage
const getData = () => {
    const cart = localStorage.getItem('cart')

    let cartOject;
    if (cart) {
        cartOject = JSON.parse(cart)
    } else {
        cartOject = {}
    }
    return cartOject;
}


const loadData = () => {
    const cart = getData()
    for (const product in cart) {
        const li = document.createElement('li')
        li.innerText = product;
        products.appendChild(li)
    }
}

loadData()

purchaseBtn.addEventListener('click', () => {
    products.textContent = ''
    localStorage.removeItem('cart')
})


















/* addBtn.addEventListener('click', () => {
    const productName = productInput.value;
    // add to list in ui
    addToList(productName)


    //clearing value
    productInput.value = ""
})
 */