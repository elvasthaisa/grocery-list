import { useState } from "react";
import { ListItem } from "./SubmitSectionStyles";

const SubmitSection = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem !== "") {
      setNewItem("");
      setList((prevList) => [...prevList, newItem]);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={newItem} />
      <button onClick={handleSubmit}>Submit</button>

      {list.map((item, index) => (
        <div>
          <ListItem key={index}>{item}</ListItem>
        </div>
      ))}
    </div>
  );
};

export default SubmitSection;
