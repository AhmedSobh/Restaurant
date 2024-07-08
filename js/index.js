let userInfo = document.querySelector("#user-name")
let userName = document.querySelector("#username")
let btnCon = document.querySelector("#btn-con")
let cart = document.querySelector(".cart")
let logOut = document.querySelector("#log-out")
let container1 = document.querySelector(".container1")
let searchInput = document.getElementById("search-input")
let mainContent = document.getElementById("main-content")
let formSelect = document.querySelector(".form-select")

if(localStorage.getItem("firistName")){
    btnCon.remove()
    userInfo.style.display = "block"
    userName.innerHTML = localStorage.getItem("firistName")
    cart.style.display="block"
    logOut.style.display="block"
    container1.style.display="flex"
}
logOut.addEventListener("click", function(){
    localStorage.removeItem("firistName")
    location.reload()
})

///////////////////////////////////////////////////////////////////////
const products = [
    { id: 1,Image:"images/dish-1.png", name: "Egg with salad", category: "Food", price: 500 },
    { id: 2,Image:"images/dish-2.png", name: "Meet", category: "Food", price: 50 },
    { id: 3,Image:"images/dish-3.png", name: "Pcklweez", category: "Food", price: 300 },
    { id: 4,Image:"images/dish-4.png", name: "chicken", category: "Food", price: 20 },
    { id: 4,Image:"images/dish-5.png", name: "Wight Salad", category: "Food", price: 20 },
    { id: 4,Image:"images/dish-6.png", name: "I don know", category: "Food", price: 20 },
    { id: 4,Image:"images/dish-7.png", name: "Pasta", category: "Food", price: 20 },
    { id: 4,Image:"images/dish-8.png", name: "Chicken", category: "Food", price: 20 },
    { id: 4,Image:"images/dish-9.png", name: "Salad", category: "Food", price: 20 },
    // Add more products as needed
  ];
  function drawMain(array) {
    const allProduct = array.map((Item) => {
      return `<div class="card" style="width:400px">
      <img class="card-img-top" src="${Item.Image}" alt="Card image" style="width:100%">
      <div class="card-body">
        <h4 class="card-title">Name:${Item.name}</h4>
        <p class="card-text">Catagory: ${Item.category}</p>
        <div class="icons-card">
          <a href="#" class="btn btn-danger">Order Product</a> <i class="fas fa-heart"></i>
      </div>
      </div>
    </div>`
    })
    mainContent.innerHTML = allProduct.join("")

  }
    drawMain(products)
  
  searchInput.addEventListener("input",function(){
    let searchedProduct = []
    let search = searchInput.value
    let key = search.toLowerCase()
    products.filter((Item)=>{
      if (formSelect.value === "name") {
        
        let output = Item.name
        let nameKey =output.toLowerCase()
        if (nameKey.indexOf(key) !=-1) {
          searchedProduct.push(Item)
        } 
        console.log(searchedProduct);
  
      }else if(formSelect.value==="catagory"){
        let output = Item.category
        let nameKey =output.toLowerCase()
        if (nameKey.indexOf(key) !=-1) {
          searchedProduct.push(Item)
        } 
        console.log(searchedProduct);
  
      }
      if (searchedProduct.length !== 0) {
        drawMain(searchedProduct)
      }
      })
  })