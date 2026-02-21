
const restaurants = [
    { id: 1, name: "Burger House", rating: 4.6, img: "images/burger_house.jpg" },
    { id: 2, name: "Pizza Corner", rating: 4.4, img: "images/pizza_corner.jpg" },
    { id: 3, name: "American Diner", rating: 4.7, img: "images/american_diner.jpg" } 
];
const menus = {
    1: [
        { name: "Classic Chicken Burger", price: 250, img: "images/chicken_burger.jpg" },
        { name: "Cheese Burger", price: 280, img: "images/cheese_burger.jpg" },
        { name: "French Fries", price: 120, img: "images/french_fries.jpg" }
    ],
    2: [
        { name: "Pepperoni Pizza", price: 350, img: "images/pepperoni_pizza.jpg" },
        { name: "Cheese Pizza", price: 300, img: "images/cheese_pizza.jpg" }
    ],
    3: [
        { name: "Pancakes with Syrup", price: 220, img: "images/pancake.jpg" },
        { name: "Hot Dog", price: 180, img: "images/hotdog.jpg" },
        { name: "Fried Chicken", price: 320, img: "images/fried_chicken.jpg" }
    ]
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
const container = document.getElementById("restaurants");
if (container) {
    function displayRestaurants() {
        container.innerHTML = "";
        restaurants.forEach(r => {
            container.innerHTML += `
                <div class="card">
                    <img src="${r.img}" alt="${r.name}">
                    <div class="card-content">
                        <h3>${r.name}</h3>
                        <p>⭐ ${r.rating}</p>
                        <button class="view-menu-btn" onclick="openMenu(${r.id})">VIEW MENU</button>
                    </div>
                </div>
            `;
        });
    }
    displayRestaurants();
}

function openMenu(id) {
    localStorage.setItem("restaurantId", id);
    window.location.href = "menu.html";
}