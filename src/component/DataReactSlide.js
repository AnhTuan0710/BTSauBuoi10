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
        },
        UpdateUser(state, action){
            let {name, tuoiMoi, lopMoi}= action.payload;
            let arr = state.find((item)=>item.name===name);
            if(arr) {
                if(lopMoi= 'react')
                {
                    arr.age= tuoiMoi
                }
                else{
                    for(let i=0; i<state.length; i++){
                        if(state[i].name=== name){
                            state.splice(i,1);
                        }
                    }
                }
            }
        }
        
    }

});

export const {AddMemberReact, deleteUser, UpdateUser}= dataReact.actions;
export default dataReact.reducer