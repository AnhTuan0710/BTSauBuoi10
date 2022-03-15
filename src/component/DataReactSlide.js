import {createSlice} from "@reduxjs/toolkit";
const initialState = [
    { name: "Linh", age: 22, type: "react" },
    { name: "Huy", age: 20, type: "react" },
    { name: "Long", age: 21, type: "react" },
  ];
const dataReact = createSlice({
    name: "dataReactList",
    initialState, 
    reducers: {
        AddMemberReact: {
            reducer(state, action)
            {state.push(action.payload);},
            prepare(name, age, type){
                return {
                    payload: {
                        name,
                        age,
                        type
                    }
                }
            }
        },
        deleteUser(state, action)
        {
            const{index} = action.payload;
            state.splice(index,1);
        }
        
    }

});

export const {AddMemberReact, deleteUser}= dataReact.actions;
export default dataReact.reducer