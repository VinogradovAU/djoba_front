import './styles/App.css';
import './styles/User.css';
import './styles/Job.css';
// import { useState } from 'react';
// import { Message } from './components/message';
// import { User } from './components/user';
import { useState } from 'react';
import axios from 'axios'
import { UserList } from './components/userslist';
import { JobList } from './components/joblist';

function App() {
  const [users, setUsers] = useState([]
  //   [
  //   {'id': 1,name:'user1', email:'user1@example.com', is_company:true, created_at:'0001', updated_at:'0005'},
  //   {'id': 2,name:'user1', email:'user2@example.com', is_company:true, created_at:'0001', updated_at:'0005'},
  //   {'id': 3,name:'user1', email:'user3@example.com', is_company:true, created_at:'0001', updated_at:'0005'}
  // ]
  )
  const [jobs, setJobs] = useState([])
  

  // const [text, setText] = useState("I am a prop")

  // const handleClick = () => {
  //     alert("Click!");
  //     setText("New text" + Math.random());
  // };

  async function fetchUsers() {
    const response = await axios.get('http://localhost:8000/users/api?limit=100&skip=0')
    console.log(response.data)
    setUsers(response.data)
  }

  async function fetchJoblist() {
    const response = await axios.get('http://localhost:8000/jobs/api?limit=100&skip=0')
    console.log(response.data)
    setJobs(response.data)
  }

  return (
    
    <div className='App'>
     {/* <button onClick={fetchUsers}>Загрузить список пользователей</button>
     <UserList users={users} title={"Список пользователей"}/> */}
     <button onClick={fetchJoblist}>Загрузит список работ</button>
     <JobList jobs={jobs} title={"Список работ"}/>
     
    </div>
    
  );
}

export default App;
