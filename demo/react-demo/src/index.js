import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import getRouter from './router/index';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import registerServiceWorker from './registerServiceWorker';

const Router = getRouter();

ReactDOM.render(
    <Provider store={store}>
        <div>{Router}</div>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
