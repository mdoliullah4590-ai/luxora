// Admin Add Product

function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value
let cat = document.getElementById("cat").value
let details = document.getElementById("details").value
let img = document.getElementById("img").value


if(!name || !price){

alert("Fill product name and price")
return

}


let newProduct = {

id: products.length + 1,
name: name,
price: Number(price),
cat: cat,
details: details,
img: img

}


products.push(newProduct)

alert("Product Added Successfully")

}
