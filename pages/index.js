import Favourite from "./favourite"
import Tools from "./tools"
import Todo from "./todo"

export default function Home() {
  return (
    <div>
   <h1>wow first react project</h1>
   <h2>why i love react</h2>
    <ul>
      <li>it is reusabel</li>
      <li>it is Easy to Use</li>
      <li>it is Easy to Learn and the community is wide</li>
  
    </ul>
    <Favourite name='nike' FavouritePlayer='Rico Lewis'/>
     <Tools skill1='Html' skill2='css' skill3='Javascript'/>

     <h1>My Todo for today</h1>
     <Todo todo='learn usestate'/>
     <Todo todo='Learn conditional rendering'/>
     <Todo todo='Learn list'/>
   </div>

  )
}
