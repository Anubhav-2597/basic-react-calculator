import {add, substract, mulitply, division} from './Calc'

function App(){
  return(
    <>
    <ul>
      <li>sum of two no is {add(20, 30)}</li>
      <li>substraction of two no is {substract(50, 30)}</li>
      <li>multiplication of two no is {mulitply(4, 8)}</li>
      <li>division of two no is {division(40, 3)}</li>
    </ul>
  </>
  )
}

export default App
