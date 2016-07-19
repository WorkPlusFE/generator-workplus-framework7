'use strict';

import Constant from './constant';

export default {
    // api list
};

function request(params) {
    var defaults = {
        url: Constant.SERVER_URL + params.path,
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        complete: function(request, status) {}
    }
    $.each(defaults, function(key, val){
        if (!params[key]) {
            params[key] = val;
        }
    });
    
    var _successFn = params.success;
    params.success = function(result, status, xhr){
        // 拦截
        _successFn(result, status, xhr);
    };
    
    if (params.type.toUpperCase() === 'POST' && params.contentType && params.contentType.indexOf('json') != -1) {
        params.data = JSON.stringify(params.data);
    }
    console.log('调用接口:\n%s,\n参数列表:', params.url, params.data);
    $.ajax(params);
};