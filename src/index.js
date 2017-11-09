import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './components/App';

const div_root = document.getElementById("root");
ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    div_root
);

if (module.hot) module.hot.accept('./components/App',()=>{
    const NewApp = require('./components/App').default;
    ReactDOM.render(
        <AppContainer>
            <NewApp/>
        </AppContainer>
        ,div_root
    );
})