/**
 * @description app入口
 * @author chenwubai.cx@gmail.com
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './main.less';

function render() {
    ReactDOM.render((
        <p className="text">Hello world</p>
    ), document.querySelector('#app'));

    /*$.ajax({
        type: 'GET',
        url: '/api/getList'
    }).done(function(res) {
        console.log(res);
    });*/
}

render();