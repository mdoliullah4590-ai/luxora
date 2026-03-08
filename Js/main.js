// Render Products

function renderProducts(containerId) {

let container = document.getElementById(containerId)

if(!container) return

container.innerHTML = ""

products.forEach(product => {

container.innerHTML += `

<div class="card">

<img src="${product.img}" width="180">

<h3>${product.name}</h3>

<p>${product.price} BDT</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

`

})

}


// Run rendering

renderProducts("products")
renderProducts("shop-products")
