import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListReact from './ListReact';
import updateUderReact from './DataReactSlide';
import AddUserReact from './DataReactSlide';

export default function UpdateReact (){
    const [tenMoi, setTenMoi] = useState(ListReact.name);
    const [tuoiMoi, setTuoiMoi] = useState(ListReact.age);
    const [lopMoi, setLopMoi] = useState(ListReact.type);
    const getValueName = async (e) => {
        await setTenMoi(e.target.value);
      };
      const getValueAge = (e) => {
        setTuoiMoi(e.target.value);
      };
      const getValueClass = (e) => {
        setLopMoi(e.target.value);
      };
      const dispath= useDispatch();
      const param= useParams();
      const listReact = useSelector((state)=>
          state.dataReactList.find((list) => list.name=== param.reactName),
      );
      const UpdateUser =(tenMoi, lopMoi)=>{
          if(lopMoi==='react')
          {
              dispath(updateUderReact({name: param.reactName, tuoiMoi, lopMoi}));
          }
          else{
              dispath(updateUderReact({name: param.reactName, tuoiMoi, lopMoi}));
              dispath(AddUserReact(tenMoi, tuoiMoi, lopMoi));
          }
      }
    return (
        <div>
        <form>
     <h2 id="Add_Update">Update User</h2>
             Tên : <input type='text' value={tenMoi} onChange={getValueName} />
             Tuổi :{' '}
             <input type='number'value={tuoiMoi} onChange={getValueAge} />
             <select value={lopMoi} onChange={getValueClass}>
                 <option value='react'>React</option>
                 <option value='java'>Java</option>
             </select>
         </form>
   <br/>
         <button className='updateMember' onClick={()=> {UpdateUser(lopMoi)}}>
             Update
         </button>
   
   </div>
    )
}
