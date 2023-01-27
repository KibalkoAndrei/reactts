import { useState} from 'react';
import './App.css';
import Chart from './components/chart';
import InputTable from './components/input';

function App() {

  const [list, setList] = useState<Array<object>>([])
  const [button, setButton] = useState<string>('START')
  const [title, setTitle] = useState<string>('')
  const [boolItem, setBoolItem] = useState<boolean>(false)

    const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    };

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

   console.log(setList)
    const newIP:object  = {
        id: Date.now(),
        ip: title,
        time: getRandomIntInclusive(30, 400)
    }

 


    const addIP = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setBoolItem(!boolItem)
        if (boolItem) {
            setButton('STOP');
            setList([...list, newIP])
        };
        if (!boolItem) {
            setButton('START')
        }
    };


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

        <table>
          <tr>
            <td>IP</td>
            <td>Значение</td>
            <td>индекс</td>
          </tr>
          {
            list.map((listIp) => {
              <tr>
                <td>{listIp.ip}</td>
                <td>{listIp.time}</td>
                <td>{listIp.id}</td>
              </tr>
            })
          }
        </table>
        
      <Chart/>
    </div>
  );
}

export default App;
