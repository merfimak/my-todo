import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersActionCreator } from '../../store/redusers/usersReducer.js'
import { setTotalCountActionCreator } from '../../store/redusers/usersReducer.js'
import { setCurentPageActionCreator } from '../../store/redusers/usersReducer.js'


function Users(props) {

    let [users, setUsers] = useState([]);

    useEffect(() => (
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.carrentPage}&count=${props.pageSize}`)
            .then(res => {
                props.setUsers(res.data.items)
                props.setTotalCount(res.data.totalCount)
            })

    ), [])
    
    useEffect(() => (
        setUsers(props.users)
    ), [props.users])

    let members = users.map(function (item) {
        return <div key={item.id} >{item.id}{item.name}</div>
    })

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];
    for(let i = 1; i<=pagesCount;i++){
        pages.push(i)
    }

    function onPageChenge(p){
        props.setCurentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`)
            .then(res => {
                props.setUsers(res.data.items)
                props.setTotalCount(res.data.totalCount)
            })

    }
    
let pagination = pages.map( p =>{
    return <div key={p.id} onClick={ (e) => onPageChenge(p)} className={props.carrentPage == p ? 'selected_page_number' : 'pagination_pages_number'}> {p} </div> 
})

    return (
        <div className="Todo" >
            <div className="container" >

                

                <h1 className="todo_title" > Users </h1>
                <div className="pagination_pages_numbers">{pagination}</div>
                <div>  {members} </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        carrentPage: state.users.carrentPage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {dispatch(setUsersActionCreator(users));},
        setTotalCount: (totalCount) => {dispatch(setTotalCountActionCreator(totalCount));},
        setCurentPage: (CurentPage) => {dispatch(setCurentPageActionCreator(CurentPage));},
        
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
