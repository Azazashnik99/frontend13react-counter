// import Alert from "./Alert"

// function Text({name, age}){
//     return(
//         <div>
//             <p>Text:{name}</p>
//             <p>Text:{age}</p>
//             <Alert name={name} age={age}/>
//         </div>
//     )
// }

// export default Text

import refresh from '../assets/img/refresh.png'

function Btn(counter,setCounter) {

    const plus = () => {
        setCounter(counter + 1);
    }
     const minus = () => {
         setCounter(counter - 1);
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