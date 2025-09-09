let cartButton = document.querySelector('.cart-btn')
let navCartImg = document.querySelector('.nav-cart-img')
let quantity = document.querySelector('.quantity')
let cartQuantity = document.querySelector('.cart-quantity')
let menu = document.querySelector('.menu')
let navUl = document.querySelector('.nav-ul')
let navDisplay = document.querySelector('.nav-display')
let navH2 = document.querySelector('.aman-store-h2')
let navUlLi = document.querySelectorAll('.nav-ul-li')
let arrow = document.querySelector('.arrow')
let cartDiv = document.querySelector('.cart-div')
let addToCartH2 = document.querySelector('.add-to-cart-h2')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let bill = document.querySelector('.bill')
let cartPrice = document.querySelector(".cart-price")
let cartDivCont = document.querySelector('.cart-div-cont')


if (cartButton) {
    cartQuantity.className = 'display-none'

    let quantityCount = 0
    quantity.innerHTML = quantityCount


    const product = JSON.parse(localStorage.getItem('cartthings'))
    if (product) {
        document.querySelector(".cart-h2").textContent = product.name
        cartPrice.textContent = "Price: " + product.price
        document.querySelector(".cart-img").src = product.imgSrc
        document.querySelectorAll('.cart-border').forEach((elems) => {
            elems.src = product.imgSrc
        })
    }
}

// Yeh part products page ke liye hai
document.querySelectorAll('.product-grids .watch-buttons').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation() // sirf button pe chale
        const product = button.closest('.product-grids')
        gotoCart(product)
    })
})

const gotoCart = (element) => {
    let imgSrc = element.querySelector('img').src
    let name = element.querySelector('.watch-names').innerHTML
    let priceText = element.querySelector('.watch-price').innerText.toLowerCase().replace("price", "").trim();
    let price = (parseInt(priceText) || 0) * 1000;

    const product = { imgSrc, name, price }
    localStorage.setItem("cartthings", JSON.stringify(product))

    window.location.href = 'cart.html'
}


const gotoSpecific = (className) => {
    let sections = document.querySelector(className)
    sections.scrollIntoView({
        behavior: 'smooth'
    })
}
let display = true

menu.addEventListener('click', () => {
    navUl.className = `${display ? 'display-block-ul' : 'display-none'}`
    navDisplay.className = `nav-display ${display ? 'nav-displays-height' : 'height-auto'}`
    navH2.style.display = display ? 'none' : 'block'
    display = !display

    navUlLi.forEach((lis) => {
        lis.className = display ? 'li-styling' : 'li-styling'
    })

})

const scrollHandle = () => {

    if (scrollY > 250) {
        if (arrow) {

            arrow.style.position = 'fixed'
            arrow.style.display = 'block'
        }
        window.removeEventListener('scroll', scrollHandle)
    }
    // document.addEventListener('scroll',scrollHandle)
}


const checkLocation = () => {
    if (location.pathname.includes('cart.html')) {
        console.log('href')
        menu.style.display = 'none'
    }

}
checkLocation()

window.addEventListener('scroll', scrollHandle)
let priceText = "price 40000";
let price = Number(priceText.replace("price", "").trim());
console.log(price);

let prices = document.querySelectorAll(".watch-price");
let total = 0;
if (bill) {

    bill.textContent = "Total: " + total;
    bill.className = 'bill-style'
}

if (plus) {
    plus.addEventListener('click', () => {
        navCartImg.style.display = 'block';
        cartQuantity.className = 'cart-quantity';
        quantity.innerHTML++;

        cartDivCont.style.display = 'block'

        let price = parseInt(cartPrice.textContent.replace(/\D/g, "")) || 0;
        if (!isNaN(price)) {
            total += price;
        }

        bill.textContent = "Your Total Price is : " + (total);
    });
}

if (minus) {

    minus.addEventListener('click', () => {
        navCartImg.style.display = 'block'
        cartQuantity.className = 'cart-quantity'
        quantity.innerHTML--

        let price = parseInt(cartPrice.textContent.replace(/\D/g, "")) || 0;
        total -= price;

        bill.textContent = "Your Total Price is : " + (total);
    })

}
if(cartButton){

    cartButton.addEventListener('click', () => {
        navCartImg.style.display = 'block'
        cartQuantity.className = 'cart-quantity'
        quantity.innerHTML++

        cartDivCont.className = 'display-blocks'


        let price = parseInt(cartPrice.textContent.replace(/\D/g, "")) || 0;
        if (!isNaN(price)) {
            total += price;
        }
        bill.textContent = "Your Total Price is : " + (total);

    })
}

if (arrow) {

    arrow.addEventListener('click', () => {
        window.scrollTo({
            top: '0px',
            behavior: 'smooth'
        })
    })
}

