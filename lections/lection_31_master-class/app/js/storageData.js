var storageData = (function(){

    var _restConfig = {
        api: {
            protocol: 'http://',
            host: 'localhost',
            port: ':5000'
        },
        products: {
            url: '/products',
            method: 'GET'
        },
        order: {
            url: '/order',
            method: 'POST'
        }
    }

    var _model = {
        products: [],
        cart: {}
    }

    function getProducts() {
        return doAjax(_restConfig.products)
                .then(function(response)  {
                    _model.products = response.data.productsList;

                    return response;
                });
    }

    function doOrder() {
        var body = {}

        for(var key in _model.cart) {
            body[key] =  _model.cart[key];
            delete body[key].title;
        }

        var params = Object.assign(_restConfig.order, { body: body });
     
        return doAjax(params);
    }

    function doAjax(config) {
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
    
            xhr.open(config.method, getAPI(config.url), true);

            xhr.send(JSON.stringify(config.body));
        
            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) {
                    return;
                }

                var response = JSON.parse(xhr.responseText);

                resolve(response);
            }
        });
    }

    function getAPI(url) {
        return `${_restConfig.api.protocol}${_restConfig.api.host}${_restConfig.api.port}${url}`
    }

    function setModelFromLocalStorage() {
        _model.cart = getFromLocalStorage('cart');

        // _model.info = getFromLocalStorage('info');
        // _model.status = getFromLocalStorage('status');
        // _model.list = getFromLocalStorage('list');
    }

    function updateLocalStorage(key){
        window.localStorage[key] = JSON.stringify(_model[key]);
    }

    function getFromLocalStorage(key){
        if(window.localStorage[key]) {
            return JSON.parse(window.localStorage[key]);
        }
        
        return {};
    }

    function addToCart(id, title) {
        if (!_model.cart[id]) {
            _model.cart[id] = {
                size: 1,
                title: title
            }

            
        } else {
            _model.cart[id].size++;
        }

        updateLocalStorage('cart');
    }

    function removeFromCart(id, type) {
        type === 'all' ? delete _model.cart[id] : _model.cart[id].size--;
    }

    return {
        getProducts,
        addToCart,
        removeFromCart,
        model: _model,
        setModelFromLocalStorage,
        doOrder
    }
})();