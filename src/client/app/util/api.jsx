import 'whatwg-fetch';

const Api = {
    call: function (url) {
        fetch(url, {
            method: 'GET'
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            callbackSuccess(json);
        }).catch(function(ex) {
            callbackError(ex);
        })
    }
};

export default Api;
