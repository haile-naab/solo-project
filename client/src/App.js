import {Router} from '@reach/router'
import './App.css';
import AddRent from './components/AddRent';
import EditRent from './components/EditRent';
import RentList from './components/ListRent';
import RentDetail from './components/RentDetail';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">


<Router>
      
      
      {/* <AuthorDetail path='/author/:id'/>
      <AuthorEdit path="/author/edit/:id" /> */}
      {/* < SignIn default  />
      < SignUp path='/signup' /> */}
      <RentList  default  />
      <AddRent  path='/rent' />
      <RentDetail path='/rent/:id' />
      <EditRent path="/rent/edit/:id" />
      
      {/* <PetNew  path='/pet' />
      <PetEdit path="/pet/edit/:id" />
      <PetsDetail  path='/pet/:id'  /> */}
      </Router>
      
    </div>
  );
}

export default App;
