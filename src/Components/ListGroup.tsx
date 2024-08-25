import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
//import { MouseEvent } from "react";
/*

function ListGroup() {
    return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
          </ul>
    </Fragment>
    //We couldve used a div element to wrap all of this together, but instead of adding an extra element to the DOM, we'll just use "Fragment" which does just that but w/o having to add an extra element.
    // You can also just type in <> instead of <Fragment> 
    );
}

To make the code look cleaner (since all the above is hard coded) and use the items in the list dynamically, we'll add them to an array.
*/

//Props stands for properties.

interface Props{ 
    items: string[] ;
    heading: string;
    onSelectItem: (item:string) =>void;
    /* the onSelectItem is a property very similar to onClick.
    It is a function that has a parameter of type string and returns void.
    */

}

function ListGroup({items, heading, onSelectItem}: Props){
    
    // we'll use mapping which converts each item(city) in the list into a different type.
    // {cities.map(item => <li>{item}</li>)} this is jsx markup which cannot be used here, hence wrapping it in curly brackets.
    //braces {} can help you render anything dynamically.
    /*cities =[];
    
    if (cities.length===0)
        return <><h1>List</h1><p>No city found</p></>;
    Now, we can do this implementation, but it's just too much repeated code.
    So instead, we'll create a constant Message. to have a cleaner code ya3ni.
    */

/*
    const message =cities.length===0 ? <p>No city found</p> : null
We can also scratch that and create a function getMessage which will help us pass arguments.
But if we dont have arguments to pass, then its better to just use const Message.
In case of using a function, we'll call the function in the return statement as follows:
{getMessage()}
    */

   /*const getMessage = () => {
    return cities.length===0 ? <p>No city found</p> : null;; 
   }*/

    /*{cities.length===0 && <p>No city found</p> }
    is just an easier way to write {cities.length===0 ? <p>No city found</p> : null}*/
  
    //let selectedIndex = 0; //this =0 means that the index must be selected first.

    //Hooke function :
    /*const arr = useState(-1);
    arr[0] //variable selectedIndex
    arr[1] //updater function

    ORRRR:
    */

    const [selectedIndex, setSelectedIndex] = useState(-1);


    /*
    //Creating an event handler:
    const handleClick = (event: MouseEvent)=> console.log(event);

    In the return statment, it will be onClick={handleClick}
*/

    return (
        <>
        <h1>{heading}</h1>
        
        {items.length===0 && <p>No city found</p> }
        <ul className="list-group">
        {items.map((item,index) => 
        
        <li className= {selectedIndex === index ?'list-group-item active' : 'list-group-item' } 
        
        key={item} 
        
        onClick={()=>{setSelectedIndex (index); onSelectItem(item);}}>
            
            {item}</li>)} 
        </ul>
        </>

    );
}
/*In React, each item has a property called "OnClick" */
//className= "list-group-item active" is a bootstrap syntax. for css purposes.
//Using props, we can pass data to our components.
/*
Props should be treated as unchangeable or immutable. Props are passed to a component; similar to function arguments.
State on the other hand is mutable. We're telling react that this component has data that can change over time.
Both- when any of them change, react will update the DOM accordingly.
*/

export default ListGroup;