import 'whatwg-fetch';

const Api = {
    checkStatus: function(response) {
        if (response.status >= 200 && response.status < 300) {
        return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    },
    
    parseJSON: function(response) {
        return response.json()
    },

    call: function (url,callbackSuccess,callbackError) {
        fetch(url, {
            method: 'GET'
        })
        .then(this.checkStatus)
        .then(this.parseJSON)
        .then(function(json) {
            callbackSuccess(json);
        }).catch(function(ex) {
            callbackError(ex);
        })
    }
};

export default Api;
