import React, { useState } from "react";



const InputTable = ({lst, SetList}: GenericList) => {
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

   console.log(SetList)
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
            SetList(newIP)
        };
        if (!boolItem) {
            setButton('START')
        }
    };

    return(
        <div>
        <form action="">
            <input
                placeholder="Введите ваш IP"
                value={title}
                onChange={OnChangeHandler}
            />
            <button type="submit" onClick={addIP}>{button}</button>
        </form>
        </div>
    )
}

export default InputTable;