
function loadProducts() {
    fetch('https://zalupa.kaizo.wtf/api/v1/products/')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            const container = document.getElementById('container-products')
            container.innerHTML = ''
            for (let i = 0; i<data.products.length; i++) {
                const product = data.products[i];
                const card = document.createElement('div');
                card.className = 'product-card';
                card.textContent = product.title;
                container.appendChild(card);
                const img = document.createElement('img');
                img.className = 'product-img';
                img.src = product.image_url;
                container.appendChild(img);
                const price = document.createElement('div');
                price.className = 'product-price';
                price.textContent = product.price;
                container.appendChild(price);
            };
        })
        .catch(error => console.error('Ошибка:', error))
};


document.addEventListener('DOMContentLoaded', loadProducts());
