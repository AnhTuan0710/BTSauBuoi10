import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddMemberReact } from './DataReactSlide';

export default function AddMember () {
    const [tenMoi, setTenMoi] = useState('');
    const [tuoiMoi, setTuoiMoi] = useState(0);
    const [lopMoi, setLopMoi] = useState('react');
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
      const AddMember= (lopMoi) =>
      {
          if(lopMoi==='react')
          {
              dispath(AddMemberReact(tenMoi, tuoiMoi, lopMoi))
          }
      }
    return (
      <div>
           <form>
        <h2 id="Add_Update">Thêm</h2>
				Tên : <input type='text' value={tenMoi} onChange={getValueName} />
				Tuổi :{' '}
				<input type='number'value={tuoiMoi} onChange={getValueAge} />
				<select value={lopMoi} onChange={getValueClass}>
					<option value='react'>React</option>
					<option value='java'>Java</option>
				</select>
			</form>
      <br/>
			<button className='addMember' onClick={()=> {AddMember(lopMoi)}}>
				Add Member
			</button>
      
      </div>
    )
}
