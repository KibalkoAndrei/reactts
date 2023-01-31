import { useState} from 'react';
import './App.css';
import Chart from './components/chart';



function App() {

  const [listIp, setListIp] = useState<Array<string>>([]);
  const [listId, setlistId] = useState<Array<number>>([]);
  const [listTime, setlistTime] = useState<Array<number>>([]);
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

 

    const addIP = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setBoolItem(!boolItem)
        if (boolItem) {
            setButton('STOP');
            setListIp([...listIp, title, title, title, title, title, title, title, title,])
            setlistId([...listId, Date.now(), Date.now(), Date.now(), Date.now(), Date.now(), Date.now(), Date.now(), Date.now()])
            setlistTime([...listTime, getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40), getRandomIntInclusive(30, 40)])
        };
        if (!boolItem) {
            setButton('START')
        }
    };
  console.log(listIp, listTime)

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
            <div className='td1'>ID</div>
            {listIp.map((listItem) => <div className='tr1'>{listItem}</div>)}
          </div>
          <div>
            <div className='td2'>IP</div>
            {listIp.map((listItem) => <div className='tr2'>{listItem}</div>)}
          </div>
          <div>
            <div className='td3'>ITEM</div>
            {listIp.map((listItem) => <div className='tr3'>{listItem}</div>)}
          </div>
        </div>
      <Chart listIP={listIp} listId={listId} listTime={listTime}/>
    </div>
  );
}

export default App;
