/**
 * @description app入口
 * @author chenwubai.cx@gmail.com
 */
import React from 'react';
import ReactDOM from 'react-dom';

function render() {
    ReactDOM.render((
        <p>Hello world!</p>
    ), document.querySelector('#app'));
}

render();