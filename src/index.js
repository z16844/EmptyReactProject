import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './components/App';

//Redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const div_root = document.getElementById("root");

const store= createStore(reducers);

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    div_root
);

if (module.hot) module.hot.accept('./components/App',()=>{
    const NewApp = require('./components/App').default;
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContainer>
        ,div_root
    );
})