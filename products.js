let products = [
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/a369cbcb-9c6c-5646-a517-31316f259d82?w=2500&h=2051",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/663beb1d-8f4b-5862-921b-cdb7e38ac60a?w=2500&h=1978",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    },
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/a369cbcb-9c6c-5646-a517-31316f259d82?w=2500&h=2051",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/663beb1d-8f4b-5862-921b-cdb7e38ac60a?w=2500&h=1978",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    }
    ,
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/a369cbcb-9c6c-5646-a517-31316f259d82?w=2500&h=2051",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/663beb1d-8f4b-5862-921b-cdb7e38ac60a?w=2500&h=1978",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    }
    ,
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/17e88131-5c64-528c-99b8-e4b1229c28ce?h=1040&w=1102&qlt=40&unsharp=0,1,0.6,7&sm=clamp&upscale=true&fmt=auto",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/c216c40f-5903-59f0-8118-bd9b818d01b0?h=1040&w=1102&qlt=40&unsharp=0,1,0.6,7&sm=clamp&upscale=true&fmt=auto",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    }
  ];
  const originalProducts = [...products];
  
  let currentPage = 1;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  // Функция для создания HTML-кода рейтинга
  function generateRatingHTML(rating) {
    let ratingHTML = "";
    for (let i = 0; i < Math.floor(rating); i++) {
      ratingHTML += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    if (rating % 1 !== 0) {
      ratingHTML += '<i class="fa fa-star-half" aria-hidden="true"></i>';
    }
    for (let i = Math.ceil(rating); i < 5; i++) {
      ratingHTML += '<i class="fa fa-star-o" aria-hidden="true"></i>';
    }
    return ratingHTML;
  }
  
  // Функция для отображения товаров
  function displayProducts() {
    const container = document.querySelector(".small-container .row");
    container.innerHTML = ''; // Очищаем контейнер
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = products.slice(start, end);
  
    productsToDisplay.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.classList.add("col-4");
  
      productCard.innerHTML = `
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <h4><a href="${product.link}">${product.name}</a></h4>
        <p>${product.description}</p>
        <div class="rating">
          ${generateRatingHTML(product.rating)}
        </div>
        <p>${product.price}</p>
        <button class="product--details" onclick="addToCart(${start + index})">Add to Cart</button>
      `;
      container.appendChild(productCard);
    });
  
    renderPagination();
  }
  
  // Функция для создания кнопок пагинации
  function renderPagination() {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ''; // Очищаем контейнер
  
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add('page-btn');
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      pageButton.addEventListener('click', () => {
        currentPage = i;
        displayProducts();
      });
      paginationContainer.appendChild(pageButton);
    }
  }
  
  

        function sortProducts(criteria) {
          if (criteria === "default") {
            products = [...originalProducts];
          } else if (criteria === "asc") {
            products.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')))
          } else if (criteria === "desc") {
            products.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')))
          } 

        displayProducts(); 

  }
  
  // Добавление обработчика для сортировки
  document.getElementById('sort-options').addEventListener('change', (event) => {
    sortProducts(event.target.value);
    
  });
  
// Define a data structure for the cart
let cart = [];

// Function to add product to the cart
function addToCart(index) {
  const product = products[index];
  cart.push(product);
  updateCartCount();
  displayCartItems();
  displayCartModal();
}

// Update cart count in the navigation bar
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
  cartCountElement.style.display = cart.length > 0 ? 'inline-block' : 'none';
}

// Function to display cart items in the modal
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Clear previous cart items
  
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
      <span>${item.name}</span>
      <span>${item.price}</span>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
  });

  updateCartTotal();
}

// Calculate and display the total price of items in the cart
function updateCartTotal() {
  const cartTotal = document.getElementById('cart-total');
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += parseFloat(item.price.replace('$', ''));
  });
  cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to open the cart modal
function displayCartModal() {
  const modal = document.getElementById('modalCart');
  modal.style.display = 'flex';
}

// Function to close the cart modal
function closeCartModal() {
  const modal = document.getElementById('modalCart');
  modal.style.display = 'none';
}

// Function to remove an item from the cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName); // Remove item from the cart
  displayCartItems(); // Re-render cart items
  updateCartCount(); // Update the cart count in the navigation
  if (cart.length === 0) {
    closeCartModal(); // Close modal if cart is empty
  }
}

// Add event listener to close the modal
document.querySelector('.modal-cart-close').addEventListener('click', closeCartModal);

// Add event listener to cart icon to open the modal
document.getElementById('cart-container').addEventListener('click', displayCartModal);

  // Инициализация при загрузке страницы
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
  });

  //Обработчик поиска
  document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    products = originalProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    displayProducts();
});
let products = [
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/a369cbcb-9c6c-5646-a517-31316f259d82?w=2500&h=2051",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/663beb1d-8f4b-5862-921b-cdb7e38ac60a?w=2500&h=1978",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    },
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/a369cbcb-9c6c-5646-a517-31316f259d82?w=2500&h=2051",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/663beb1d-8f4b-5862-921b-cdb7e38ac60a?w=2500&h=1978",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    }
    ,
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/a369cbcb-9c6c-5646-a517-31316f259d82?w=2500&h=2051",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/663beb1d-8f4b-5862-921b-cdb7e38ac60a?w=2500&h=1978",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    }
    ,
    {
      name: "JBL TUNE",
      description: "Product description",
      image: "https://i.otto.de/i/otto/1f8eb4a2-cf67-58f0-bfd3-bd0a5609c301?w=2500&h=2029",
      price: "$34.99",
      link: "./prod1.html",
      rating: 4.5
    },
    {
      name: "Foodi AF400EU",
      description: "Product description",
      image: "https://i.otto.de/i/otto/17e88131-5c64-528c-99b8-e4b1229c28ce?h=1040&w=1102&qlt=40&unsharp=0,1,0.6,7&sm=clamp&upscale=true&fmt=auto",
      price: "$29.00",
      link: "./prod2.html",
      rating: 4.0
    },
    {
      name: "Boots",
      description: "Product description",
      image: "https://i.otto.de/i/otto/c216c40f-5903-59f0-8118-bd9b818d01b0?h=1040&w=1102&qlt=40&unsharp=0,1,0.6,7&sm=clamp&upscale=true&fmt=auto",
      price: "$9.99",
      link: "./prod3.html",
      rating: 3.5
    }
  ];
  const originalProducts = [...products];
  
  let currentPage = 1;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  // Функция для создания HTML-кода рейтинга
  function generateRatingHTML(rating) {
    let ratingHTML = "";
    for (let i = 0; i < Math.floor(rating); i++) {
      ratingHTML += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    if (rating % 1 !== 0) {
      ratingHTML += '<i class="fa fa-star-half" aria-hidden="true"></i>';
    }
    for (let i = Math.ceil(rating); i < 5; i++) {
      ratingHTML += '<i class="fa fa-star-o" aria-hidden="true"></i>';
    }
    return ratingHTML;
  }
  
  // Функция для отображения товаров
  function displayProducts() {
    const container = document.querySelector(".small-container .row");
    container.innerHTML = ''; // Очищаем контейнер
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = products.slice(start, end);
  
    productsToDisplay.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.classList.add("col-4");
  
      productCard.innerHTML = `
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <h4><a href="${product.link}">${product.name}</a></h4>
        <p>${product.description}</p>
        <div class="rating">
          ${generateRatingHTML(product.rating)}
        </div>
        <p>${product.price}</p>
        <button class="product--details" onclick="addToCart(${start + index})">Add to Cart</button>
      `;
      container.appendChild(productCard);
    });
  
    renderPagination();
  }
  
  // Функция для создания кнопок пагинации
  function renderPagination() {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ''; // Очищаем контейнер
  
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.classList.add('page-btn');
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      pageButton.addEventListener('click', () => {
        currentPage = i;
        displayProducts();
      });
      paginationContainer.appendChild(pageButton);
    }
  }
  
  

        function sortProducts(criteria) {
          if (criteria === "default") {
            products = [...originalProducts];
          } else if (criteria === "asc") {
            products.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')))
          } else if (criteria === "desc") {
            products.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')))
          } 

        displayProducts(); 

  }
  
  // Добавление обработчика для сортировки
  document.getElementById('sort-options').addEventListener('change', (event) => {
    sortProducts(event.target.value);
    
  });
  
// Define a data structure for the cart
let cart = [];

// Function to add product to the cart
function addToCart(index) {
  const product = products[index];
  cart.push(product);
  updateCartCount();
  displayCartItems();
  displayCartModal();
}

// Update cart count in the navigation bar
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
  cartCountElement.style.display = cart.length > 0 ? 'inline-block' : 'none';
}

// Function to display cart items in the modal
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Clear previous cart items
  
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
      <span>${item.name}</span>
      <span>${item.price}</span>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
  });

  updateCartTotal();
}

// Calculate and display the total price of items in the cart
function updateCartTotal() {
  const cartTotal = document.getElementById('cart-total');
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += parseFloat(item.price.replace('$', ''));
  });
  cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to open the cart modal
function displayCartModal() {
  const modal = document.getElementById('modalCart');
  modal.style.display = 'flex';
}

// Function to close the cart modal
function closeCartModal() {
  const modal = document.getElementById('modalCart');
  modal.style.display = 'none';
}

// Function to remove an item from the cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName); // Remove item from the cart
  displayCartItems(); // Re-render cart items
  updateCartCount(); // Update the cart count in the navigation
  if (cart.length === 0) {
    closeCartModal(); // Close modal if cart is empty
  }
}

// Add event listener to close the modal
document.querySelector('.modal-cart-close').addEventListener('click', closeCartModal);

// Add event listener to cart icon to open the modal
document.getElementById('cart-container').addEventListener('click', displayCartModal);

  // Инициализация при загрузке страницы
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
  });

  //Обработчик поиска
  document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    products = originalProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    displayProducts();
});
