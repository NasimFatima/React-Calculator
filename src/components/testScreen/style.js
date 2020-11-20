import styled from 'styled-components';


export const Box = styled.div`
  min-height: 30px;
  font-size: 30px;
  text-align: right;
  word-wrap: break-word;
  background-color: black;
  color: white;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 90%;
  padding: 7px;
  font-family: 'digital';

  @media (max-width: 768px) {
    max-width: 230px;
  }
`;
