import refresh from '../assets/img/refresh.png'

function Btn({counter,setCounter}) {
//Дз
    const plus = () => {
        setCounter(counter + 3);
    }
     const minus = () => {
        if(counter>0){
            setCounter(counter - 2);
        }else
            setCounter(0);
    }
      const reset = () => {
         setCounter(0);
    }

    return(
        <div className="main-buttons">
            <div className="btn-plus">
                <button className="btn__values" onClick={plus}>
                    +
                </button>
            </div>

            <button className="btn-refresh" onClick={reset}>
                <img src={refresh} alt="" />
            </button>

            <div className="btn-minus">
                <button className="btn__values-minus" onClick={minus}>
                    -
                </button>
            </div>
        </div>
        );
    }
    
export default Btn;