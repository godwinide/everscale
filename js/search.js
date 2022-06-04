console.log('search js INIT ');
let limit = 0;

function subgovSearch(data) {
    let send_data = "search_data=" + data;
    //AJAX
    $.ajax({
        url: ever.apiDomain + 'method/subgov.get',
        type: 'POST',
        data: send_data,
        dataType: 'html',
        beforeSend: function() {
        },
        complete: function() {
        },
        success: function(data) {
            //console.log(data);
            // const obj = JSON.parse(data);
            $('.subgov_cards').html(data);
            //console.log(data.length);
            // console.log(obj.json);
            // obj.json.forEach(element => console.log(element.id));
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log("AJAX ERR: {0x991881118}" + thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
    //AJAX

}

let ajax = {
    post: function(method, data) {
        data['limit'] = limit;
        console.log(JSON.stringify(data));
        console.log('post api',ever.apiDomain + 'method/' + method)
        //AJAX
            $.ajax({
                url: ever.apiDomain + 'method/' + method, //products.get.new',
                type: 'POST',
                data: data,
                dataType: 'html',
                beforeSend: function() {
                },
                complete: function() {
                },
                success: function(data) {
                    ajax.callBack(method, data);
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log("AJAX ERR: {0x991881118}" + thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                }
            });
        //AJAX

    },
    callBack: function(expr, data) {
        switch (expr) {
            case 'products.search':
                //console.log('Product search');
                $('.cards-gallery__cards').html(data);
                break;
            case 'products.get.new':
                let isClear = products.isClear;
                if(products.isClear){
                    products.clear();
                }
                
                let isNotFound = $('<div/>').html(data).find('.cards-gallery__not-found').length;
                let loadedCards = $('<div/>').html(data).find('.cards-gallery__card_ecosystem').length;
                isHideLoadMore =  (isNotFound == 1) || ( loadedCards < products.limit );

                if(isHideLoadMore) {
                    $('.load_more_').hide();
                } else {
                    $('.btn_load-more').show();
                }
                $('.cards-gallery__cards').append(data);
                break;
            case 'products.append':
                //console.log('data length:' + data.length);
                if(data.length <= 3) {
                    $('.btn_load-more').hide();
                }
                $('.cards-gallery__cards').append(data);
                break;
            case 'get.blog':
                data = JSON.parse(data);
                if(data.length < blogs.limit) {
                    $('.btn_load-more').hide();
                }
                if(data.length > 0) {
                    data.forEach(el => {
                        let item = $('.blog_item_clone').clone();
                        item.removeClass('blog_item_clone hidden');
                        item.find('.cards-gallery__card-link').attr('href',el.news_url)
                        item.find('.cards-gallery__card-link').html(el.blog_title)
                        item.find('.cards-gallery__card-tag.pub_time span').html(dateToYMD(new Date(el.news_date)))
                        item.find('.cards-gallery__card-tag.time .info').html(el.read_time)
                        $('.everscale-blog__cards').append(item); 
                    });
                    // .append(data);

                }
                break;
            case 'adm_grant.list':
                adm_grants.setBlocks(data);
                break;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }
    }
}

$('#sub_gov_search').on('input', function () {
    //let post_var = {'action': 'process', 'search': $('#sub_gov_search').val() };
    subgovSearch($('#sub_gov_search').val());
});

let tags_arr;
$('#search_input__').on('input', function () {
    limit = 0;
    tags_arr = $('#tags_form').serializeArray();
    if( $('#search_input__').val() == ''){
        console.log('show more');
        $('.btn_load-more').show();
    } else {
        console.log('hide');
        $('.btn_load-more').hide();
    }

    if(tags_arr.length == 0) {
        tags_arr = '';
    } else {
        tags_arr = JSON.stringify(tags_arr);
    }

    products.isClear = true;
    let post_var = {'action': 'process', 'tags': tags_arr, 'search': $('#search_input__').val() };
    ajax.post('products.get.new', post_var);
});

$("#tags_form").on('change', function(){
    limit = 0;
    tags_arr = $(this).serializeArray();
    tags_arr = JSON.stringify(tags_arr);
    console.log(tags_arr);

    if(tags_arr.length == 2) {
        tags_arr = '';
    }

    if(tags_arr.length == 0) {
        $('#tag_all').prop('checked',true);
        tags_arr = '';
        //$('.load_more_').show();
    } else {
        $('#tag_all').prop('checked',false);
    }

    products.isClear = true;
    let post_var = {'action': 'process', 'tags': tags_arr, 'search': $('#search_input__').val() };
    ajax.post('products.get.new', post_var);

});

$( "#tag_all" ).on( "click", function() {
    //$('.load_more_').show();

    limit = 0;
    console.log('tags all');
    tags_arr = '';
    $('#tags_form').trigger('reset');

    products.isClear = true;
    let post_var = {'action': 'process', 'tags': tags_arr, 'search': $('#search_input__').val() };
    ajax.post('products.get.new', post_var);
});

var old = 0;
var count = 0;
$('input[name=tags_prod]').click( function(){
    if (old == $('input[name=tags_prod]:checked', '#tags_form').val()) {
        $('#tag_all').click();
    }
    old = $('input[name=tags_prod]:checked', '#tags_form').val();
});
let products = {
    offset: 0,
    limit:12,
    isClear:false,
    clear:function(){
        $('.product-wrapper').empty();
        this.offset = 0;
        this.isClear = false;
    },
    append: function(){
        this.offset = this.offset + this.limit;
        limit = this.offset;
        let post_var = {'action': 'process', 'tags': tags_arr, 'search': $('#search_input__').val() };
        ajax.post('products.get.new', post_var);
    },
}

let blogs = {
    offset: 0,
    limit:6,
    append: function(){
        this.offset = this.offset + this.limit;
        limit = this.limit;
        let post_var = {
            'limit': this.limit, 
            'start': this.offset, 
            'order': 'news_date',
            'order_direction':'desc' };
        ajax.post('get.blog', post_var);
    },
}

let adm_grants = {
    offset: 0,
    limit:3,
    sourceBlock:function(){
        return `<div class="cards-gallery__card cards-gallery__card_grants">
                <img class="cards-gallery__card-icon" src="" alt="">
                <div class="cards-gallery__card-content">
                    <h3 class="cards-gallery__card-title block-title">
                        <a class="cards-gallery__card-link" target="_blank"></a>
                    </h3>
                    <p class="cards-gallery__card-description block-text">
                    </p>
                    <div class="cards-gallery__card-tags">
                        <div class="cards-gallery__card-tag">
                            <span>GitHub</span>
                            <a href="https://github.com/INTONNATION" target="blank" style="color: white; text-decoration: none">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>`;  
    },
    setBlocks:function(data){
        data = JSON.parse(data);
        let wrapper = $('.adm_grant_wrapper');
        let cardBlock = wrapper.find('.cards-gallery__cards');
        let loadBtn = wrapper.find('.btn_load-more');
        console.log(data.length , this.limit,'data');
        if(data.length < this.limit) {
            loadBtn.hide();
        }
        if(data.length > 0) {
            data.forEach(el => {
                let item = $(this.sourceBlock()).clone();
                console.log(item,'item')
                item.find('.block-title a').html(el.product_title)
                item.find('img').prop('src','https://cdn.everscale.network/method/get.file/?file_id='+el.logo_fileid+'&quality=96&size=150')
                item.find('.block-text').html(el.product_description)

                if(el.product_site && el.product_site != '-'){
                    item.find('.cards-gallery__card-tag a, a.cards-gallery__card-link').attr('href',el.product_site)
                    item.find('.cards-gallery__card-tag a').removeClass('hidden')
                    item.find('.cards-gallery__card-tag span').addClass('hidden')
                }else{
                    item.find('.cards-gallery__card-tag').addClass('disabled');
                    item.find('.cards-gallery__card-tag a').addClass('hidden')
                    item.find('.cards-gallery__card-tag span').removeClass('hidden')
                }
                cardBlock.append(item); 
            });
            loadBtn.removeClass('hidden');
        }
    },
    append: function(){
        this.offset = this.offset + this.limit;
        limit = this.limit;
        let post_var = {
            'limit': this.limit, 
            'start': this.offset, 
            'order': 'sort',
            'order_direction':'asc'
        };
        ajax.post('adm_grant.list', post_var);
    },
    init: function(){
        this.offset = 0 - this.limit;
        this.append();
    }
}

$('.everscale-blog .btn_load-more').on('click',function(){
    blogs.append();
})

$('.adm_grant_wrapper .btn_load-more').on('click',function(e){
    e.preventDefault();
    adm_grants.append();
})
adm_grants.init();

function dateToYMD(date) {
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + ' ' + m;
}
