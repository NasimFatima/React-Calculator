import React, { useState } from 'react';
import Button from './Button/button';
import TextScreen from './testScreen/testScreen';
import { isOperand, lastElementIsOperator, formatOperator, VerifyExpression, formatExprssionForCalculations } from '../utils/validators'

const Calculator = () => {

  const intialValue = 0;
  const [result, setResult] = useState('')
  let [dotCount, setDotCount] = useState(intialValue)

  const calculateExpression = () => {
    if (VerifyExpression(result))
      try {
        setResult(eval(formatExprssionForCalculations(result)).toString())
      }
      catch (err) {
        alert("Malformed Expression")
      }

  }

  const makeExpression = (value) => {
    if (isOperand(value)) {
      if (lastElementIsOperator(result))
        return;
      value = formatOperator(value)
      setDotCount(intialValue)
    }

    if (value === '.') {
      if (dotCount < 1) {
        setDotCount(prevCount => prevCount + 1)
      }
      else
        return;
    }
    setResult(prevResult => prevResult + value)

  }

  function calculate(event) {
    const value = event.target.value
    switch (value) {
      case 'C':
        setResult('')
        setDotCount(intialValue)
        break
      case '=':
        calculateExpression()
        break
      default:
        makeExpression(value)
        break
    }
  }

  return (
    <div>
      <p> CALCULATOR </p>
      <TextScreen value={result}></TextScreen>
      <Button value='7' onClick={calculate}> 7 </Button>
      <Button value='8' onClick={calculate}> 8 </Button>
      <Button value='9' onClick={calculate}> 9</Button>
      <Button value='/' onClick={calculate}> ÷ </Button>
      <Button value='4' onClick={calculate}> 4 </Button>
      <Button value='5' onClick={calculate}> 5 </Button>
      <Button value='6' onClick={calculate}> 6 </Button>
      <Button value='*' onClick={calculate}> × </Button>
      <Button value='1' onClick={calculate}> 1 </Button>
      <Button value='2' onClick={calculate}> 2 </Button>
      <Button value='3' onClick={calculate}> 3 </Button>
      <Button value='-' onClick={calculate}> - </Button>
      <Button value='0' onClick={calculate}> 0 </Button>
      <Button value='.' onClick={calculate}> . </Button>
      <Button value='%' onClick={calculate}> % </Button>
      <Button value='+' onClick={calculate}> + </Button>
      <Button value='=' onClick={calculate}> = </Button>
      <Button value='C' onClick={calculate}> C </Button>

    </div>
  )

}

export default Calculator
