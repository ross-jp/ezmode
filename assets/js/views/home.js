views.home = function(data, params){
    var api_stub = 'posts/index.json';

    utils.request(
        'home_page',
        'home_page_error'
    );
};
