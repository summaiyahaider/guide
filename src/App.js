import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginForm from "./components/loginform/Loginform"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Btech from "./components/undergraduate/Btech"
import Bba from "./components/undergraduate/Bba"
import Mbbs from "./components/undergraduate/Mbbs"
import Nursing from "./components/undergraduate/Nursing"
import Mba from "./components/postgraduate/Mba"
import Mstech from "./components/postgraduate/Mstech"
import Msmanagement from "./components/postgraduate/Msmanagement"
import Hero from "./components/home/hero/Hero"
function App() {
  return (
    <>
      <Router>
        <Header />
        <LoginForm/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path="/undergraduate/Btech" component={Btech} />
          <Route path="/undergraduate/Bba" component={Bba} />
          <Route path="/undergraduate/Mbbs" component={Mbbs}/>
          <Route path="/undergraduate/Nursing" component={Nursing}/>
          <Route path="/postgraduate/Mba" component={Mba}/>
          <Route path="/postgraduate/Mstech" component={Mstech}/>
          <Route path="/postgraduate/Msmanagement" component={Msmanagement}/>
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/book-session' component={LoginForm} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
