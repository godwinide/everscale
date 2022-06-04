console.log('common.js init');

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*
function setCookie(name, value, options = {}) {

    options = {
        'path': '/',
        'secure': true,
        'max-age': 9000000000
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    console.log(updatedCookie,'updatedCookie')
    document.cookie = updatedCookie;
}
*/

$(function () {

    try {
        $('a[data-pathname*=' + location.pathname.slice(4) + ']').addClass('active');
        subgovSearch('');
    }
    catch (error) {
        //console.log(error);
    }
});