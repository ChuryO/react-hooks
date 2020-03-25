import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const HookSwitcher = () => {
    const [color, setColor] = useState('gray');
    const [fontSize, setFontSize] = useState(14);
    return (
        <div style={{padding: '10px', background: color, fontSize: fontSize}}>
            <button onClick={() => setColor('gray')}>Dark</button>
            <button onClick={() => setColor('white')}>white</button>
            <button onClick={() => setFontSize((s) => s + 2)}>+</button>
            <button onClick={() => setFontSize((s) => s - 2)}>-</button>
            <p>Hello</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <HookSwitcher/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

