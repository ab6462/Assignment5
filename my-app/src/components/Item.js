import { connect } from 'react-redux'
import * as actions from '../actions/listActions';

const Item = ({dispatch, item}) => (
    <div>
        <p>{item.text}</p>
        {/* <p>{item.description}</p>
        <p>{item.price}</p> */}
        <img src={item.image} alt="new" className="responsive"
      />
       <button onClick={() => {
        dispatch({
            type: actions.SELECT_ITEM,
            item: {
                // text: item.name,
                description: item.description,
                price: item.price,
                // image: item.image
            }
            })
        }}>Select</button>
        <button onClick={() => {
            fetch("http://localhost:3001/users/" + item.dbid, {method: "DELETE", headers: {
                "Content-Type": "application/json",
              }})
              .then(res => res.text())
              .then(res => {
                console.log(res);
                dispatch({
                    type: actions.DELETE_ITEM,
                    dbid: res
                    });
              });
        }}>Delete</button>
    </div>
)

export default connect()(Item);