import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const Header = (props) => {

  
const cls = ['header_collor_cikle']//массив классов
cls.push(props.color)
	  return (
	  <div className="header">

		<ul className="header_link_ui">
          <li className="header_link_li">
            <Link to="">Todo</Link>
          </li>
          <li className="header_link_li">
            <Link to="/nottodo">Nottodo</Link>
          </li>
          <li className="header_link_li">
            <Link to="/users">Users</Link>
          </li>
        </ul>
				  <div className={cls.join(' ')}></div>
	 </div>
	 )
}

let mapStateToProps = (state) =>{
  //console.log(state)
  return{
    color: state.notTodo.color
  }
}


let mapDispatchToProps = (dispatch) =>{
  return{
   }
}

   const headerContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

  export default headerContainer;

