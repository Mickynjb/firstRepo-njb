//props (properties)
//we use props in react to 
//pass data from one component to another
//(from a parent component to a child component (s).
//props is just a shorter way of saying properties.
//they are useful when you want the flow of data in your
//app to be dynamic. 


export default function Favourite({name, FavouritePlayer}){

    let myName='mike'

    return(
        <>
     my name is {myName}
        <h1>My name is {name}, my favourite player is {FavouritePlayer}</h1>
        </>
    )
} 

/*
 create a component called Tools,
 the Tools should return,

*/