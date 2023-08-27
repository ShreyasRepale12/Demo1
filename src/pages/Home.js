import React, { useState } from 'react'
import { v4 as uniqueId } from 'uuid';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUserName] = useState('');

    const createRoomId = (e) => {
        e.preventDefault();
        const id = uniqueId();
        setRoomId(id);
        toast.success('Created a new room!')
    }

    const joinRoom = (e) => {

        if(!roomId || !username)
        {
            toast.error('Fill the complete details')
        }
        else
        {
            //redirect
            navigate(`/editor/${ roomId }`,{
                state: {
                    username,
                }
            });
        }
    }
    const inputEnter = (e) => {
        console.log(e.code);
        if(e.code === 'Enter')
        {
            joinRoom();
        }
    }

    console.log(roomId);
    return (
        <div className="App bg-slate-400 font-mono h-screen flex items-center justify-center">
            <div className="font-mono font-bold bg-slate-400 hover:bg-slate-500 h-9/12 w-1/3 shadow-3xl hover:shadow-6xl rounded-xl drop-shadow-md">
                <h1 className='pl-36 py-2 font-mono text-2xl m-0'>Interview-Fit</h1>

                <form className=" shadow-md rounded px-6 pt-2 pb-4">
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input
                            value={username}
                            onChange={(e) => { setUserName(e.target.value) }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            autoComplete='off'
                            onKeyUp={inputEnter}
                            >
                            </input>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" for="room-id">
                            Room ID
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

                            value={roomId}
                            onChange={(e) => { setRoomId(e.target.value) }}
                            type="text"
                            placeholder="******************"
                            
                            onKeyUp={inputEnter}
                            ></input>
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="flex items-center justify-between">

                        <a
                            href="/#"
                            onClick={createRoomId}
                            className="inline-block align-baseline underline font-bold text-md pl-2 text-white hover:text-blue-300"
                            >
                            new room
                        </a>

                        <button 
                        onClick={joinRoom}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button">
                            JOIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;
