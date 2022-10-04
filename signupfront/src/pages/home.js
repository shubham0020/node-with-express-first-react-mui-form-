
import { useState,useEffect, useSyncExternalStore } from "react";
import http from "../http"
export default function Home(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{ 
            setUsers(res.data);

        })
    }
    return(
        <div>
            <h2>Users Listing ..</h2>
            <table>
                <thead>
                <tr>
                    <th>sno.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                         
                        <tr key={user.id}>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>Buttons</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    ) 

}