import './App.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Item from './components/Item';
import * as actions from './actions/listActions';
import DetailedView from './components/DetailedView';

function App({dispatch, items, selectedItem}) {
  const [inputs, setInputs] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const callAPI = () => {
      fetch("http://localhost:3001/users")
          .then(res => res.text())
          .then(res => {
            const items = JSON.parse(res);
            dispatch({
              type: actions.SET_ITEMS,
              items
            });
          });
  }

  useEffect(() =>{
    callAPI();
    },[callAPI])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/users", {method: "POST", headers: {
      "Content-Type": "application/json",
    }, body: JSON.stringify(inputs)})
    .then(res => res.text())
    .then(res => {
      const item = JSON.parse(res);
      dispatch({
        type: actions.ADD_ITEM,
        item
      });
    });



  }

  const handleClick = () => {
    setInputs('');
  };

  const renderList = (items) => {
    return items.map((item, idx) => <Item item={item} idx={idx} key={idx}/>)
  }

  return (
    <div className="App">
 <form onSubmit={handleSubmit}>
      <label>Item Name:
      <input 
        id="name"
        type="text" 
        name="name" 
        placeholder="Item Name"
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Description:
        <input 
          id="description"
          type="text" 
          name="description" 
          placeholder="Description"
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Price:
      <input 
        id="price"
        type="text" 
        name="price" 
        placeholder="Price"
        value={inputs.price || ""} 
        onChange={handleChange}
        />
        </label>
        <label>Image:
      <input 
        id="image"
        type="text" 
        name="image" 
        placeholder="Image"
        value={inputs.image || ""} 
        onChange={handleChange}
        />
        </label>
        <label>Manufacturer:
      <input 
        id="manufacturer"
        type="text" 
        name="manufacturer" 
        placeholder="Manufacturer"
        value={inputs.manufacturer || ""} 
        onChange={handleChange}
        />
        </label>
        <input type="submit"/>
    </form>
    <button onClick={handleClick}>Reset</button>

    {renderList(items)}
    {<DetailedView item={selectedItem}/>}
    </div>
  );
}

// map the parts of the state that we want to the props 
// this refreshes everytime i change the staten
const mapStateToProps = state => ({
  items: state.items,
  selectedItem: state.selectedItem
})

// use connect() for app to get access to store
export default connect(mapStateToProps)(App);


