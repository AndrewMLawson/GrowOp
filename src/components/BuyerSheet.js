import React, {useState, Component} from 'react'
import styled from 'styled-components';
import Modal from 'react-modal'



//gives color and shape to the button
const Button = styled.button`
  background-color: #3949ab;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  &: hover{
    background-color: #283593
  }
`

function BuyerSheet() {
  //saves the data input by the user into variables to use later
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  const [date, setDate] = useState(null)
  function  getData(val)
  {
    setData(val.target.value)
    console.warn(val.target.value)
  }
  function getDate(val)
  {
    setDate(val.target.value)
    console.warn(val.target.value)
  }
  const [modalIsOpen, setModalIsOpen]= useState(false)
  return (
    
    <div className="App">
      
          <header className="App-header">
    
    
        <h1>How many Lbs of "Banana" are you buying-----<input type = "number" onChange={getData}/></h1>
        <Button onClick = {()=>setPrint(true)}>Submit</Button>
        <h1>Input your Expected Delivery Date, MM/DD/YYYY------<input type="datetime-local" onChange={getDate}/></h1>
        {
        print?
        <h2>
          Sell : {data} lbs of "Banana" for =$ {data*1.45}
          </h2>
         :null
        } 
        {print?
        <Button onClick={() => setModalIsOpen(true)}>
            Complete
          </Button>
          :null}
        <Modal isOpen={modalIsOpen}>
          <h2>Your Request has Been Submitted</h2>

          <h2>Proposal Summary</h2>
          <h2>{data} lbs of "Bananas".......${data*1.45}</h2>

          <h2>{date} is the expected Date of Delivery</h2>
          <small>You will recieve a notification via email regarding you proposal</small>
          <div>
            <Button onClick = {() =>setModalIsOpen(false)}> Close</Button>
          </div>
        </Modal>
        
      </header>
    </div>
  );
  
}
export default BuyerSheet;