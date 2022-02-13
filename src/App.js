import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import "./app.css"
import ChatFeed  from './components/Chatfeed';
import LoginForm from './components/login-form';

export function App() {

	if(!localStorage.getItem('username'))return <LoginForm/>
	return (
		<>
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='645e8d10-2653-4e7e-bdc0-2a6f78b96333'
            //renderchatfeed will help us to render our own chat feed 
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
			onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
		
		</>
	);
}
export default App;

