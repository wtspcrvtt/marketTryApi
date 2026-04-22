
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
                card.dataset.id = product.id;
                card.addEventListener('click', () => {
                    loadProductsDetail(product.id);
                });
            };
        })
        .catch(error => console.error('Ошибка:', error))
};

function loadProductsDetail(id) {
    fetch(`https://zalupa.kaizo.wtf/api/v1/products/${id}`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            const productName = document.getElementById('product-name');
            const productImg = document.getElementById('product-img');
            const productPrice = document.getElementById('product-price');
            const productInf = document.getElementById('product-info');
            productName.textContent = data.title;
            productImg.src = data.image_url;
            productPrice.textContent = data.price;
            productInf.textContent = data.description;
            document.getElementById('container-products').style.display = 'none';
            document.getElementById('product-detail').style.display = 'block';
        })
};

const backBtn = document.getElementById('back-btn');

document.addEventListener('DOMContentLoaded', loadProducts);
backBtn.addEventListener('click', () => {
    document.getElementById('container-products').style.display = 'block';
    document.getElementById('product-detail').style.display = 'none';
});
