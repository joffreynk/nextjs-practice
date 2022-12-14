import Link from "next/link";
import User from "./user";


const Index = ({users}) => {
    // const listUsers = users.map(user =><p key={user.id}>{user.name}</p>)
    console.log(users);
  return (
    <div>
        {users.map(user => <Link href={`users/${user.id}`} key={user.id}><User  user={user} /></Link> )}
    </div>
  )
}


export default Index

export async function getStaticProps(){
    const getUsers = await fetch('http://localhost:3001/api/users');
    const users = await getUsers.json();

    return {
          props: {
            users
          }
        }
}
