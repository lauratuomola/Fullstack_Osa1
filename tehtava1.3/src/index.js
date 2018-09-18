import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Osa =(props) => {
    return(
        <div>
            {props.osa} {props.tehtavat}
        </div>
    
    )
}
const Sisalto = (props) => {
    
    
    return(
        <div>
            <Osa osa={props.osa1} tehtavat={props.tehtavia1}/>
            <Osa osa={props.osa2} tehtavat={props.tehtavia2}/>
            <Osa osa={props.osa3} tehtavat={props.tehtavia3}/>
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
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  
    return (
      <div>
        
        <Otsikko course={kurssi} />
        <Sisalto osa1={osa1.nimi} tehtavia1={osa1.tehtavia}/>
        <Sisalto osa2={osa2.nimi} tehtavia2={osa2.tehtavia}/>
        <Sisalto osa3={osa3.nimi} tehtavia3={osa3.tehtavia}/>
        <Yhteensa tehtava1={osa1.tehtavia} tehtava2={osa2.tehtavia} tehtava3={osa3.tehtavia}/>
        
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )