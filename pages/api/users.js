

const users = async (req, res) => {

  res.status(200).json([
    {id: 1, name: 'Joffrey'},
    {id: 2, name: 'Joffrey'},
    {id: 3, name: 'Joffrey'},
    {id: 4, name: 'Joffrey'},
    {id: 5, name: 'Joffrey'},
    {id: 6, name: 'Joffrey'},
    {id: 7, name: 'Joffrey'},
    {id: 8, name: 'Joffrey'},
    {id: 9, name: 'Joffrey'},
  ]);
}


export default users