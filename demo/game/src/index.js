import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import GetRouter from './router';
import './index.less';
import * as serviceWorker from './serviceWorker';
import '@/mock';

ReactDOM.render(
    <Provider {...stores}>
        <GetRouter />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
