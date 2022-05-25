
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Switch,
Route,
Redirect,
} from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Login from "./components/Login.js";
import Explore from "./components/Explore.js";
import About from "./components/About.js";

function App() {
return (
	<>
	<Router>
		<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/about" component={About} />
		<Route path="/login" component={Login} />
    <Route path="/explore" component={Explore}/>
		<Redirect to="/" />
		</Switch>
	</Router>
	</>
);
}

export default App;
