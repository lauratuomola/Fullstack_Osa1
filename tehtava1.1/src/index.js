import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <div><h1>{props.course}</h1></div>
    )
}
const Sisalto = (props) => {
    return(
        <div>
            {props.osa}  {props.tehtavat}
        </div>
    )
}
const Yhteensa = (props) => {
    return(
        <div>
            <p>Yhteensä {props.tehtava1 + props.tehtava2 + props.tehtava3} tehtävää</p>
        </div>
    
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
  
    return (
      <div>
        <Otsikko course={kurssi} />
        <Sisalto osa={osa1} tehtavat={tehtavia1}/>
        <Sisalto osa={osa2} tehtavat={tehtavia2}/>
        <Sisalto osa={osa3} tehtavat={tehtavia3}/>      
        <Yhteensa tehtava1 = {tehtavia1} tehtava2 = {tehtavia2} tehtava3 = {tehtavia3} />
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )