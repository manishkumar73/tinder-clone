import React from 'react'
import Chat from './Chat'
import './Chats.css'

const Chats = () => {
    return (
        <div className="chats">
            <Chat
          name='Elon Musk'
          message='You look so cute'
          timestamp='2 minutes ago'
          profilePic='https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg'
        />
        <Chat
          name='Bill Gates'
          message='You look so cute'
          timestamp='2 minutes ago'
          profilePic='https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg'
        />
        <Chat
          name='QDK'
          message='You look so cute'
          timestamp='2 minutes ago'
          profilePic='https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg'
        />
        <Chat
          name='Flynn Rider'
          message='You look so cute'
          timestamp='2 minutes ago'
          profilePic='https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg'
        />
        <Chat
          name='Flynn Rider'
          message='You look so cute'
          timestamp='2 minutes ago'
          profilePic='https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg'
        />
        </div>
    )
}

export default Chats
