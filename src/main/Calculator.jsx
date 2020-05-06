import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0', //valor que esta sendo exibido na calc
    clearDisplay: false, //Precisa limpar ou não ?
    operation: null, //Armazenar a Operação. + - * /
    values: [0, 0], //Array com valor 1 e 2
    current: 0 //Informar o Indice do array, 0 ou 1.
}

export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory(){
        this.setState({...initialState})
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(num){
        //Evitar ter dois . no display da Calculadora.
        if (num === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + num
        this.setState({ displayValue, clearDisplay: false  })

        if (num !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }


    render() {
        const addDigit = num => this.addDigit(num)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple click={ () => this.clearMemory() } />
                <Button label="/" operation click={setOperation} />
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" operation click={setOperation}/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" operation click={setOperation}/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" operation click={setOperation}/>
                <Button label="0" double="double" click={addDigit}/>
                <Button label="." click={addDigit}/>
                <Button label="=" operation click={setOperation}/>
            </div>
        )
    }
}