const basket=[];
// Define a function to create a CheckoutProduct
function createCheckoutProduct(id, image, title, price, rating) {
    const container = document.createElement('div');
    container.className = 'checkoutProduct';

    const imageElement = document.createElement('img');
    imageElement.className = 'checkoutProduct__image';
    imageElement.src = image;

    const infoContainer = document.createElement('div');
    infoContainer.className = 'checkoutProduct__info';

    const titleElement = document.createElement('p');
    titleElement.className = 'checkoutProduct__title';
    titleElement.textContent = title;

    const priceElement = document.createElement('p');
    priceElement.className = 'checkoutProduct__price';
    const smallElement = document.createElement('small');
    smallElement.textContent = '$';
    const strongElement = document.createElement('strong');
    strongElement.textContent = price;

    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'checkoutProduct__rating';
    for (let i = 0; i < rating; i++) {
        const starElement = document.createElement('p');
        starElement.textContent = '⭐';
        ratingContainer.appendChild(starElement);
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove from Basket';
    removeButton.addEventListener('click', function() {
        console.log('Remove button clicked for product ID:', id);
        removeFromBasket(id);
    });

    // Append elements to the container
    container.appendChild(imageElement);
    infoContainer.appendChild(titleElement);
    priceElement.appendChild(smallElement);
    priceElement.appendChild(strongElement);
    infoContainer.appendChild(priceElement);
    infoContainer.appendChild(ratingContainer);
    infoContainer.appendChild(removeButton);
    container.appendChild(infoContainer);

    basket.push({ id, container });
    console.log(basket);

    return container;
}
// Function to remove a product from the basket
function removeFromBasket(id) {
    
    // Find the index of the product with the matching ID
    const index = basket.findIndex(product => product.id === id);
    console.log("hello");

    if (index !== -1) {
        // Remove the product from the basket array
        basket.splice(index, 1);
        

        // Remove the product element from the HTML
        const productElement = document.getElementById(id);
        if (productElement) {
            productElement.remove();
            console.log("he");
        }
    }
}


// Example usage:
const checkoutProductsContainer = document.getElementById('checkoutProductsContainer');
const product = createCheckoutProduct('product1', 'image1.jpg', 'Product 1', 19.99, 5);
checkoutProductsContainer.appendChild(product);
