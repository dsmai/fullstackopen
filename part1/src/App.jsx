import { useState } from "react";
import Content from "./components/Content";
import DummyButton from "./components/DummyButton";
import Header from "./components/Header";
import Total from "./components/Total";
import Display from "./components/Display";
import AnotherButton from "./components/AnotherButton";
import Form from "./components/Form";
import { useSelector } from "react-redux";

const App = () => {
  // useState
  const [counter, setCounter] = useState(0);

  // Event handlers
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Cannot decrement further");
    }
  };
  const handleReset = () => setCounter(0);
  console.log(counter);

  // setTimeout(() => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // }, 1000);

  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercise: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercise: 7,
  };
  const part3 = {
    name: "State of a component",
    exercise: 14,
  };
  const part_list = [part1, part2, part3];
  const textToDisplay = "Hello Miu";

  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header course={course} textToDisplay={textToDisplay} />
      <Content part_list={part_list} />
      <Total part_list={part_list} />
      <Display counter={counter} />
      <DummyButton text="Increment" onClick={handleIncrement} />
      <DummyButton text="Decrement" onClick={handleDecrement} />
      <DummyButton text="Reset" onClick={handleReset} />
      <div>
        <AnotherButton />
      </div>
      <Form />
      <div>I am {user.name}</div>
    </div>
  );
};

export default App;
