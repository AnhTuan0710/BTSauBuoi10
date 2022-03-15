import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import ListJava from './component/ListJava';
import ListReact from './component/ListReact';
import AddMember from './component/AddMember';
import UpdateReact from './component/UpdateReact';

function App() {
  return (
    <div>
      <div className='container-fluid'>
      <ul className='nav justify-content-center nav-tabs'>
				<li className='nav-item'>
					<Link className='nav-link' to='/java'>
						Java
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/react'>
						React
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/addMember'>
						Add Member
					</Link>
				</li>
			</ul>
      </div>
      <Routes>
        <Route path='/java' element= {<ListJava/>}></Route>
        <Route path='/react' element= {<ListReact/>}></Route>
        <Route path='/addMember' element= {<AddMember/>}></Route>
        <Route path='/react/:reactName' element= {<UpdateReact/>}></Route>
        <Route path='' element= ''></Route>
      </Routes>
    </div>
  );

}

export default App;
