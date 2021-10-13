import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter.tsx';



//要实现局部热更新，必须要添加此句

ReactDOM.render(<Counter />, document.getElementById('root'));
