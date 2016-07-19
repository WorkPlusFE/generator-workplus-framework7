import './home.less';

import Xhr from '../utils/xhr';
import Tool from '../utils/tool';
import Constant from '../utils/constant';

import homeHtml from './home.tpl.html';

export default {
    init(){
        var _list = ['Accrodion', 'Cards', 'Grid', 'List View', 'Modal', 'Picker'],
            _$ul = $('.home-page-content .list-block ul');

        _$ul.html(Tool.renderTpl(homeHtml, {'list': _list}));
    }
};