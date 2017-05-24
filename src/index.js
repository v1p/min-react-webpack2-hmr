import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = (Component) => {
    const contentRoot = document.getElementById('yabolt-root');
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>
    , contentRoot);
}

render(App);

//HMR API - enabled by devServer: { hot: true } in webpack-dev-server config
if(module.hot){
    module.hot.accept('./components/App', () => {
        render(App);
    });
}