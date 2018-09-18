import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}

const Button = ({handleClick, name}) => {
    return(<button onClick={handleClick}>
    {name}
    </button>
    )
}


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0


        }
        this.klikHyva = this.klikHyva.bind(this)
        this.klikNeutraali = this.klikNeutraali.bind(this)
        this.klikHuono = this.klikHuono.bind(this)
        this.keskiarvo = this.keskiarvo.bind(this)

    }

    

    klikHyva = () => {
        
        this.setState({ 
            hyva: this.state.hyva + 1 
        })
        
        
    }
    klikNeutraali = () => {
        
        this.setState({ 
            neutraali: this.state.neutraali + 1
        })
        
    }
    klikHuono = () => {
        
        this.setState({ 
            huono: this.state.huono + 1 
        })
        
    }
    keskiarvo = () => {
        
        this.setState( {
            keskiarvo: ((this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * (-1))/(this.state.hyva + this.state.neutraali + this.state.huono))
        })
        return this.state.keskiarvo
    }
      
    render(){
        const otsikot = [
            {
              nimi: 'Anna palautetta',
            },
            {
              nimi: 'Statistiikka',
            }
          ]
    return (
      <div>
         
        <Otsikko header= {otsikot[0].nimi} />
        
        <Button 
            handleClick={() => {this.klikHyva(); this.keskiarvo()}}
            name="hyvä"
        />
         <Button 
            handleClick={() => {this.klikNeutraali(); this.keskiarvo()}}
            name="neutraali"
        />
         <Button 
            handleClick={() => {this.klikHuono(); this.keskiarvo()}}
            name="huono"
        />
        <Otsikko header= {otsikot[1].nimi} />
        hyvä {this.state.hyva} <br></br>
        neutraali {this.state.neutraali} <br></br>
        huono {this.state.huono} <br></br>
        keskiarvo {((this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * (-1))/(this.state.hyva + this.state.neutraali + this.state.huono))}<br></br>
        positiivisia {(this.state.hyva/(this.state.hyva + this.state.neutraali + this.state.huono))*100}%

       
        
      </div>
    )
    }
    
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )