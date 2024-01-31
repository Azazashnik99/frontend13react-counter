import Number from "./Number";
import Btn from "./Btn";
import refresh from '../assets/img/refresh.png'
import { useState } from 'react';

function Main() {
    const [counter, setCounter] = useState(0)
    return(
        <div>
            <Number counter={counter}/>
            <Btn counter={counter} setCounter={setCounter}/>
        </div>
      );
  }
  
export default Main