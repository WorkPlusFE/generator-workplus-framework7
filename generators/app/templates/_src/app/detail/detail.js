import './detail.less';

import Xhr from '../utils/xhr';
import Tool from '../utils/tool';
import Constant from '../utils/constant';
import Modal from '../components/modal';

import detailHtml from './detail.tpl.html';

export default {
    init(){
        this.bindEvents();
    },
    bindEvents(){
        var events = [{
            element: '.detail-page',
            selector: '.show-alert',
            event: 'click',
            handler: function(){
                Modal.alert('alert modal!');
            }
        }];
        Tool.bindEvents(events);
    }
};