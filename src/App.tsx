import { useEffect, useRef, useState } from 'react';
import './App.css';
import Circlex from './components/chart/chart';



function App() {
  const [listIp, setListIp] = useState<Array<string>>(['']);
  const [listId, setlistId] = useState<Array<number>>([]);
  const [listTime, setlistTime] = useState<Array<number>>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]);
  const [button, setButton] = useState<string>('START');
  const [title, setTitle] = useState<string>('');
  const [boolItem, setBoolItem] = useState<boolean>(false);

  const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  };

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const refCount = useRef<number | null>(null)

  useEffect(() => {
    if (refCount.current !== null) return
    if (boolItem) {
      refCount.current = window.setInterval(() => {
        setlistTime(listTime => [...listTime, getRandomIntInclusive(40, 60)])
        setListIp(listIp => [...listIp, title])
        setlistId(listId => [...listId, 0 + listId.length])
      }, 1000);
    };
    if (!boolItem) {
      if (refCount.current) {
        window.clearInterval(refCount.current)
        refCount.current = null
        setButton('START')
      }
    }
    return () => {
      if (refCount.current !== null) {
        window.clearInterval(refCount.current);
        refCount.current=null
        setButton('START')
      }
    };
  }, [boolItem])

  const addIP = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setBoolItem(!boolItem)
    setButton('STOP')
  };

  let filtListTime = listTime.filter((number) => {return number>0})

  return (
    <div className="App">
      <form action="">
        <input
          placeholder="Введите ваш IP"
          value={title}
          onChange={OnChangeHandler}
        />
        <button type="submit" onClick={addIP}>{button}</button>
      </form>
      <div className='table'>
        <div>
          <div className='tr1'>ID</div>
          {listId.map((listItem) => <div className='tr1'>{listItem}</div>)}
        </div>
        <div>
          <div className='tr2'>IP</div>
          {listIp.map((listItem) => <div className='tr2'>{listItem}</div>)}
        </div>
        <div>
          <div className='tr3'>ITEM</div>
          {filtListTime.map((listItem) => <div className='tr3'>{listItem}</div>)}
        </div>
      </div>
      <Circlex  listTime={listTime}/>
    </div>
  );
}

export default App;