controllers.home_page = function(data, params){
    //get hello text
    var hello_text = templates.hello_text();

    var final_content = hello_text ;
    utils.render(
        'page-content',
        final_content
    );
};

controllers.home_page_error = function(data, params){
    utils.render(
        'page-content',
        data
    );
};

controllers.show_loader = function(element) {
    utils.render(
        element,
        templates.loader()
    );
}
