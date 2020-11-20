import { OPERATOR, OPERATORS_MAPPING } from './constants'

export const isOperand = (value) => (/[+/\-x*÷%]$/.test(value))

export const lastElementIsOperator = expression => OPERATOR.includes(expression[expression.length - 1])


export const formatOperator = operator => {
  console.log(OPERATORS_MAPPING.hasOwnProperty(operator))
  if (OPERATORS_MAPPING.hasOwnProperty(operator)) {
    console.log("inside if")
    return OPERATORS_MAPPING[operator]
  }
  return operator
}

export const VerifyExpression = expression => {
  const re = /(?:(?:^|[-+_*%/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
  return re.test(expression)
}

export const formatExprssionForCalculations = expression => {
  for (const [key, value] of Object.entries(OPERATORS_MAPPING)) {
    expression = expression.replace(value, key)
  }

  return expression
}
