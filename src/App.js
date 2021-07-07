import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-router-dom/Switch"
import PageNav from "./components/PageNavigation";


function App() {
  return (
  
   
      <Router basename={process.env.PUBLIC_URL}> 
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
