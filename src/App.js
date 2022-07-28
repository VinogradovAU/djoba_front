import './styles/App.css';
import './styles/User.css';
// import { useState } from 'react';
// import { Message } from './components/message';
import { User } from './components/user';
import axios from 'axios'

function App() {
  // const [text, setText] = useState("I am a prop")

  // const handleClick = () => {
  //     alert("Click!");
  //     setText("New text" + Math.random());
  // };

  // async function fetchUsers() {
  //   const response = await axios.get('http://localhost:8000/users/api?limit=100&skip=0')
  //   console.log('now requers is done')
  //   return response.data
  // }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Message message={text} onMessageClick={handleClick} />
    //   </header>
    // </div>
    <div className='App'>
      <User id={2} name={"user1"} email={"user1@example.com"} is_company={"true"} created_at={"0001"} updated_at={"0005"}/>  
 
    </div>
    
  );
}

export default App;
