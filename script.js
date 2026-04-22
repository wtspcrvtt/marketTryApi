
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
                const img = document.createElement('img');
                img.className = 'product-img';
                img.src = product.image_url;
                const price = document.createElement('div');
                price.className = 'product-price';
                price.textContent = product.price;
                const title = document.createElement('h3');
                title.className = 'product-title';
                title.textContent = product.title;
                card.appendChild(title);
                card.appendChild(img);
                card.appendChild(price);
                container.appendChild(card);
            };
        })
        .catch(error => console.error('Ошибка:', error))
};


document.addEventListener('DOMContentLoaded', loadProducts());
