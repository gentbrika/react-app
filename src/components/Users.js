import React, { useEffect, useState } from 'react'
import axios from "axios";
import './users.css'

function Users() {
    let URL = 'http://localhost:3001/api/v1/';
    let token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    let [users, setUsers] = useState()
    
    useEffect(() => {
        axios.get(`${URL}users`, config).then((res) => {
            setUsers(res)
        });
    }, [])


  return (
    <>  
        <div className='chat'>
            All users - {users?.data?.users?.length}
            {users?.data?.users?.map((user, i) => (
                <div key={i} className='user'>
                <img className='profile-image' src={user?.userDetails?.image ? user?.userDetails?.image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4Qm+aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+IDxkYzpjcmVhdG9yPiA8cmRmOlNlcT4gPHJkZjpsaT5WZWN0b3JTdG9jay5jb20vMTg5NDIzODE8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L2RjOmNyZWF0b3I+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAD6AO4DAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAEHBAUG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'} />

                {user.name}
                </div>
            ))}
        </div>
    </>

  )
}

export default Users