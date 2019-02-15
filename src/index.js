import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// const getResource = async (url) => {
//     const res = await fetch(url);
//     const body = await res.json();
//     return body;
//
// }
//
// getResource('http://epg.domru.ru/channel/list?domain=ekat')
//     .then(body => {
//         console.info(body);
//     })


