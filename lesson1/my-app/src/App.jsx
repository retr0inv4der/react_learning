import Counter from "./components/counter";
import Greetings from "./components/Greetings";
import Books from "./components/Books";
export default function App() {

  let books = ["moz" , "banana" , "owiefje"];
  return (
    <>
    <h1>Mad Invader is on his way to master this BS :D </h1>
    <Counter></Counter>
    <Greetings name="banana"></Greetings>
    <Books list={books}></Books>
    </>
  );

}
