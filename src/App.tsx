import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
//import ListGroup from "./Components/ListGroup";
//Whatever ur gonna add here is what's gonna be displayed on the website.

function App(){
  {/*
  let items = ["New York", "San Francisco", "Washington DC", "Chicago"];

  const handleSelectItem = (item:string)=>{console.log(item)}

  return (<div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>);
  Adding two instances of <ListGroup /><ListGroup /> w each one of them will have their own state, ya3ni their own rules.
-----------------------
return (
  <div><Alert> Hello world</Alert></div>
)
  */}

const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}> Hello world</Alert>} 
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>Le Button</Button>
    </div>
  )


}

export default App;
