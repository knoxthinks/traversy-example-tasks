// import React from "react";

import { Tasks } from "./components/Tasks";
import Header from "./components/Header";

function App() {
  const name = 'brad'
  return (
    <div className="container">
      <h1>G'day from VSCode</h1>
      <h2>hello {name}</h2>
      <h2>is there a name? {name ? 'yes' : 'no'}</h2>
      {/* <Header title='Hello'/> */}
      <Header title={'25'}/>
      <Tasks />
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>This is a CLASS component syntax</h1>
//   }
// }
export default App;
