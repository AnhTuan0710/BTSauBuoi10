import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './DataReactSlide';

export default function ListReact () {
    const ListReact = useSelector((state)=>state.dataReactList)
    const SORT = {
        up: 2,
        down: 3,
        no: 1,
      };
      const [sortAge, setSortAge] = useState(SORT.up);
          const getSortAge = () => {
              if (sortAge === SORT.no) {
                  return 'NO';
              }
              if (sortAge === SORT.up) {
                  return 'UP';
              }
              return 'DOWN';
          };
      const handleSort = () => {
        if (sortAge === SORT.down) {
          setSortAge(SORT.no);
        } else {
          if (sortAge === SORT.no) {
            setSortAge(SORT.up);
          } else {
            if (sortAge === SORT.up) {
              setSortAge(SORT.down);
            }
          }
        }
      };
      const [searchName, setSearchName]= useState('');
      const findName = function (list) {
		let res = [...list];
		if (searchName) {
			res = res.filter((el) => el.name.toLowerCase().includes(searchName));
		}
		if (sortAge !== SORT.NO) {
			res.sort((a, b) => {
				if (sortAge === SORT.up) {
					return parseInt(a.age) - parseInt(b.age);
				}
				if (sortAge === SORT.down) {
					return parseInt(b.age) - parseInt(a.age);
				}
			});
		}
		return res;
	};
    const dispath= useDispatch();
    const Delete = (index) =>{
         dispath(deleteUser({index}));
    }

    return (
      <div>
          <h2>list member of React class</h2>
			<div className='timKiem'>
				Tìm kiếm:{' '}
				<input
					type='text'
					name=''
					id=''
					placeholder='Tim kiem theo ten'
					value={searchName}
					onChange={(e) => setSearchName(e.target.value)}
				/>
			</div>
			<div className='sapXep'>
				<button onClick={handleSort}>
					Sắp Xếp Theo Tuổi: {getSortAge()}
				</button>
			</div>
           {ListReact.length>0 ? <ul>
        {findName(ListReact).map((item,index ) => {
          return <li key={index}>
            name: {item.name}, age: {item.age};
            <button
            onClick={()=>{
                Delete(index)
            }} 
            >Delete</button>
            <button>
                <Link to={`/react/${item.name}`}>Update</Link>
            </button>
          </li>
        })} 
 </ul>: "Khong co thanh vien nao"}
      </div>
    )
}
