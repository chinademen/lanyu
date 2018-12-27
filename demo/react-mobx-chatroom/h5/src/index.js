import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';
import stores from './stores';
import './index.less';
import 'lib-flexible';
import * as serviceWorker from './serviceWorker';
import '@/mock';

const LoadableComponent = Loadable({
    loader: () => import('./router'),
    loading: Loading,
});

ReactDOM.render(
    <Provider {...stores}>
        <LoadableComponent />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
