import * as actions from '../actions/listActions';

const initialState = {
    items: [],
    selectedItem: null
  }

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case (actions.SET_ITEMS):
            return {
                ...state,
                items: action.items
            }
        case (actions.ADD_ITEM):
            // redux always has to return a new object so need to clone array 
            const newItems = state.items.map(x => x);
            newItems.push(action.item);
            return {
                ...state,
                items: newItems
            }
        case (actions.SELECT_ITEM):
            return {
                ...state,
                selectedItem: action.item
            }
        case (actions.DELETE_ITEM):
            console.log(action);
            let newItems2 = state.items.map(x => x);
            newItems2 = newItems2.filter(item => item.dbid !== action.dbid);

            return {
                // return new state
                ...state,
                items: newItems2
            }
        default:
            return state;
    }
}
  