'use strict';

import 'framework7';
import 'framework7.ios.css';
import 'framework7.ios.color.css';
import '../assets/app.less';

import homeModule from './home/home';
import Router from './router';

var app = {
    init(){
        // Init App
        window.$ = Dom7;
        window.myApp = new Framework7({
            dynamicNavbar: true
        });
        myApp.addView('.view-main', {
            domCache: true
        });
        
        homeModule.init();
        Router.init();
    },
    // 如果需要调用cordova 需要在deviceReady后 调用 mainModule.init()
    deviceReady(){
        document.addEventListener('deviceready', function() {
            // 绑定返回事件
            document.addEventListener("backbutton", function(){
                app.cordovaBackEvent();
            }, false);
        }, false);
    },
    cordovaBackEvent(){
        // 物理返回事件
    }
};

app.init();
