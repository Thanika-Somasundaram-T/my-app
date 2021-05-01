var Person= (person) =>
{
  return(
  <div style={
      {
        background: person.color,
        border:"1px solid black",
      }   
    }
  >
   Welcome {person.name}!
   my age is {person.age}!!
   my Year of Birth is {person.yob}!!!
  </div>
  )
}

export default Person;
