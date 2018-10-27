import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import registerServiceWorker from './registerServiceWorker';
import './index.less';

const LoadableComponent = Loadable({
    loader: () => import('./router'),
    loading: Loading
});

ReactDOM.render(
    <Provider store={store}>
        <LoadableComponent />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
