import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNav from "./components/PageNavigation";


function App() {
  return (
  
   
      <Router> 
      <Switch>
        
        <Route exact path="/" component={PageNav.home} />
       

        <Route exact path="/home" component={PageNav.home} />
         

        <Route exact path="/about" component={PageNav.about} />
          

        <Route exact path="/blog" component={PageNav.blog} />
          
        
      </Switch>

    </Router>

  );
}

export default App;
