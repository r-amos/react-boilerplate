import React from 'react';
import { hot } from 'react-hot-loader';
import Child from './Child';

const App = () => {
    return (
        <div>
            <Child title={'Hello, World'} />
        </div>
    );
}

export default hot(module)(App);