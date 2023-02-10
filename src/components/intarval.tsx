import {  useState} from 'react';

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [intervalId, setIntervalId] = useState(0);
  
    const handleClick = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        return;
      }
  
      const newIntervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    };
  
    return (
      <div>
        <h1>The component has been rendered for {count} seconds</h1>
        <button onClick={handleClick}>
          {intervalId ? "Stop counting" : "Start counting"}
        </button>
      </div>
    );
  };
  
  export default App;