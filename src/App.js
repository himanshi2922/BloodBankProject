import Home from './components/Home'
import RegisterDonor from './components/RegisterDonor'
import ViewDonor from './components/ViewDonor'
import RegistrationDone from './components/RegistrationDone'
import Purchase from './components/Purchase'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AboutUs from './components/AboutUs'
import ResetPw from './components/ResetPw'
import Intro from './components/Intro'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const App = () =>{
  return(
    <Router>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/donor' component={RegisterDonor}/>
        <Route exact path='/viewdonor' component={ViewDonor}/>
        <Route exact path='/registrationdone' component={RegistrationDone}/>
        <Route exact path='/purchaseconfirmation' component={Purchase}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/resetpw' component={ResetPw}/>
        <Route exact path ='/' component={Intro}/>
      </Switch>
    </Router>
  )
}

export default App;