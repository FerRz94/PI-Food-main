import "./App.css";
import { Home, Landing, Detail, NewRecipe } from "./views";
import { Route } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getRecipes } from "./redux/actions";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRecipes());
  // }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />

      <Route exact path="/home" component={Home} />

      <Route exact path="/create" component={NewRecipe} />

      <Route exact path="/recipes/:id" component={Detail} />
    </div>
  );
}

export default App;
