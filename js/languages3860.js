console.log('languages.js init');

let language = {
    set: function(language_id,new_url){
        setCookie('language_id', language_id, {secure: true, 'max-age': 3600});
        console.log('language set to: ' + language_id,new_url);
        location.href = new_url;
        // location.reload();
    },
}

