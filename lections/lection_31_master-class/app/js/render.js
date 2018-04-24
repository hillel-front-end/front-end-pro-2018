var render = (function(){

    var $storageData = storageData;

    var _paths = {
        patternContainer: {
            product: '.products__patterns',
            record: '.records__patterns'
        },
        pattern: {
            product:  '#product',
            record: '#record'
        },
        containers: {
            cart: '.cart-container'
        }
    };

    function renderProducts(list, template) {
        var pattern = document.querySelector(`${_paths.patternContainer.product} ${_paths.pattern.product}`);

        list.forEach(item => {
            var product = pattern.cloneNode(true);

            product.classList.remove('pattern');

            var title = product.querySelector('.product__title'),
                img = product.querySelector('.product__img img'),
                button = product.querySelector('.product__action button')


            title.innerHTML = item.title;
            img.src = item.src;
            button.dataset.id = item.id;
            button.dataset.title = item.title;
            
            product.removeAttribute('id');
            template.appendChild(product);
        });
    }

    function renderCart(template) {
        var pattern = document.querySelector(`${_paths.patternContainer.record} ${_paths.pattern.record}`),
            cartList = $storageData.model.cart,
            removedItems = template.querySelectorAll('*'),
            cartContainer = document.querySelector(`${_paths.containers.cart}.hidden`);

        removedItems.forEach(item => {
            item.remove();
        })

        if (JSON.stringify(cartList) === '{}') { // gamnocode
            cartContainer.classList.add('hidden');

            return;
        }

        if(cartContainer) {
            cartContainer.classList.remove('hidden');
        }
        
        for(var key in cartList) {
            var record = pattern.cloneNode(true),
                item = cartList[key];

            record.classList.remove('pattern');

            var title = record.querySelector('.record__title'),
                size = record.querySelector('.record__size')

            title.innerHTML = item.title;
            size.innerHTML = item.size;

            record.removeAttribute('id');
            template.appendChild(record);
        };
    }

    return {
        renderProducts,
        renderCart
    };
})();