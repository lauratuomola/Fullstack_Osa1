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

const Statistics = (props) => {
    return(
        <Statistic tyyppi={props.type} val={props.value}/>
       
)
}

const Statistic = (props) => {
    return(
        <div>
        {props.tyyppi} {props.val}    
        </div>
    )
    
}


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            keskiarvo: 0,
            kaikki: []


        }
        this.klikHyva = this.klikHyva.bind(this)
        this.klikNeutraali = this.klikNeutraali.bind(this)
        this.klikHuono = this.klikHuono.bind(this)
        this.keskiarvo = this.keskiarvo.bind(this)

    }

    

    klikHyva = () => {
        
        this.setState({ 
            hyva: this.state.hyva + 1,
            kaikki: this.state.kaikki.concat('h')
        })
        
        
    }
    klikNeutraali = () => {
        
        this.setState({ 
            neutraali: this.state.neutraali + 1,
            kaikki: this.state.kaikki.concat('n')
        })
        
    }
    klikHuono = () => {
        
        this.setState({ 
            huono: this.state.huono + 1,
            kaikki: this.state.kaikki.concat('hu')
        })
        
    }
    keskiarvo = () => {
        
        this.setState( {
            keskiarvo: ((this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * (-1))/(this.state.hyva + this.state.neutraali + this.state.huono))
        })
        return this.state.keskiarvo
    }

     history = () => {
        if (this.state.kaikki.length===0){
            return(
            <div><h3>ei yhtään palautetta</h3> </div>)
        }
        return(
            <div>
                <table>
                    <tr>
                        <td> <Statistics type= "hyvä" /></td>
                        <td> <Statistics value={this.state.hyva}/> </td>
                    </tr>
                    <tr>
                        <td><Statistics type= "neutraali" /></td>
                        <td><Statistics value={this.state.neutraali}/></td>
                    </tr>
                    <tr>
                        <td><Statistics type= "huono" /> </td>
                        <td><Statistics value={this.state.huono}/></td>
                    </tr>
                    <tr>
                        <td><Statistics type= "keskiarvo" /></td>
                        <td><Statistics value = {((this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * (-1))/this.state.kaikki.length)}/></td>
                    </tr>
                    <tr>
                        <td> <Statistics type= "positiivisia" /></td>
                        <td><Statistics value = {(this.state.hyva/(this.state.kaikki.length))*100}/></td>
                    </tr>
            
                </table>
            
        %</div>
        )

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

        
        {this.history()}
        

       
        
      </div>
    )
    }
    
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )