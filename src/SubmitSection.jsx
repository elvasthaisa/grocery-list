import { useState } from "react";
import { ListItem, Row } from "./SubmitSectionStyles";
import Counter from "./Counter";


const SubmitSection = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();

    if (newItem !== "") {
      setNewItem("");
      setList((prevList) => [...prevList, {name: newItem, amount: 0}]);
    }
  };

  const addAmountToItem = (name, valueToAdd) => {
    setList(list.map(item => {
      if (item.name === name) {
        return {
          ...item, 
          amount: valueToAdd + item.amount
        }
      }

      return item
    }))
  };

  const incrementItem = (name) => addAmountToItem(name, 1);
  const decrementItem = (name) => addAmountToItem(name, -1);

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={newItem} />
      <button onClick={handleItemSubmit}>Submit</button>

      {list.map((item) => (
        <Row key={item.name}>
          <ListItem>{item.name}</ListItem>
          <Counter 
            incrementItem={() => incrementItem(item.name)}
            decrementItem={() => decrementItem(item.name)}
            amount={item.amount}
          />
        </Row>
      ))}
    </div>
  );
};

export default SubmitSection;
