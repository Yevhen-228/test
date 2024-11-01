const products = [
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
  ];
  
  // Функция для создания HTML-кода рейтинга на основе значения rating
  function generateRatingHTML(rating) {
    let ratingHTML = "";
    
    // Полные звёзды
    for (let i = 0; i < Math.floor(rating); i++) {
      ratingHTML += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
  
    // Половинка звезды, если rating не целое число
    if (rating % 1 !== 0) {
      ratingHTML += '<i class="fa fa-star-half" aria-hidden="true"></i>';
    }
  
    // Пустые звёзды для оставшихся мест (чтобы всегда было 5 звёзд)
    for (let i = Math.ceil(rating); i < 5; i++) {
      ratingHTML += '<i class="fa fa-star-o" aria-hidden="true"></i>';
    }
  
    return ratingHTML;
  }
  
  // Функция для отображения продуктов
function displayProducts() {
  const container = document.querySelector(".small-container .row");
  container.innerHTML = ''; // Очищаем контейнер перед перерисовкой

  products.forEach((product, index) => {
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
      <button class="product--details" onclick="addToCart(${index})">Add to Cart</button>
    `;
    container.appendChild(productCard);
  });
}
  
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
  });


  // Функция для сортировки продуктов
function sortProducts(order) {
  products.sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));

    return order === 'asc' ? priceA - priceB : priceB - priceA;
  });

  // Очищаем контейнер и перерисовываем продукты
  const container = document.querySelector(".small-container .row");
  container.innerHTML = '';
  displayProducts();
}

// Добавляем обработчик события для выпадающего списка
document.getElementById('sort-options').addEventListener('change', (event) => {
  sortProducts(event.target.value);
});



let cart = []; // Массив для хранения товаров в корзине

// Функция для добавления товара в корзину
function addToCart(index) {
  cart.push(products[index]);
  updateCartCount(); // Обновляем счетчик
  console.log("Товар добавлен в корзину:", products[index]); // Для отладки
}

// Функция для обновления счетчика корзины
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;

  // Показываем или скрываем счетчик в зависимости от количества товаров
  if (cart.length > 0) {
    cartCountElement.style.display = 'inline-block';
  } else {
    cartCountElement.style.display = 'none';
  }
}