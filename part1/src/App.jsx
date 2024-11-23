import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part_list = [
    { part_name: "Fundamentals of React", exercise: 10 },
    { part_name: "Using props to pass data", exercise: 7 },
    { part_name: "State of a component", exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part_list={part_list} />
      <Total part_list={part_list} />
    </div>
  );
};

export default App;
