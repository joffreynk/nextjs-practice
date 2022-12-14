import Link from "next/link";
import User from "./user";

const getData = async (url, id)=> {
  const getUsers = await fetch(url);
  const users = await getUsers.json();

  if(id) return users.filter(user=>user.id === id);
  return users;
}


const Index = ({users}) => {
  return (
    <div>
        {users.length>2 
        ?
        users.map(user => <Link href={`users/${user.id}`} key={user.id}><User  user={user} /></Link> )
        :
        users.map(user => <User key={user.id} user={user} />)
        }
    </div>
  )
}


export default Index


export const getStaticProps = async({params}) => {

  const { id } = params
  const users = await getData("http://localhost:3001/api/users", Number(id));
  return {
    props: {
      users
    }
  }
};



export const  getStaticPaths = async () => {
  const users = await getData("http://localhost:3001/api/users");
  return {
    paths: users.map(user => ({
      params: {
        id: user.id.toString()
      }
    })),
    fallback: false
  }
};
