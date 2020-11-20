import Button from './style'

const button = ({ value, onClick }) => {
  return <Button value={value} onClick={onClick}> {value} </Button>;
}

export default button
