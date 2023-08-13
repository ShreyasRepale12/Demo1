import React from 'react'
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    // const { username } = prop;
    var firstName = username.split(' ')[0];
    console.log(firstName);
    return (
        <div className='px-5 flex flex-row'>
            
            <Avatar className='mb-2' name={username} size={50} round="20px" />
            <h2 className='pl-4 pt-4'> {firstName} </h2>
        </div>
    )
}

export default Client;