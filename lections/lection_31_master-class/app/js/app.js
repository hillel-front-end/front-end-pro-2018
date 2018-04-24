var app = (function(){

    var $storageData = storageData,
        $render = render;

    function _init(){
        var cartTemplate = document.querySelector('#records');
        
        $storageData
            .getProducts()
            .then(response => {
                response.data = response.data || {};
                response.data.productsList = response.data.productsList || {};

                renderProducts(response.data.productsList);
            });
        
        $storageData.setModelFromLocalStorage();
        $render.renderCart(cartTemplate);

        document
            .querySelector('.cart__order button')
            .addEventListener('click', function(){
                $storageData.doOrder();
            });
    }

    function renderProducts(list){
        var template = document.querySelector('#products__wrapper'); 

        $render.renderProducts(list, template);
        setHandlers();
    }

    function setHandlers(){
        var actions = document.querySelectorAll('.products__wrapper .product__action button'),
            cartTemplate = document.querySelector('#records'); 

        actions.forEach(item => {
            item.addEventListener('click', function(event){
                $storageData.addToCart(this.dataset.id, this.dataset.title);

                $render.renderCart(cartTemplate);
            });
        });
    }


    

    
    _init();
})();






