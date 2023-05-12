import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { HomePage } from './components/HomePage';
import { BandsTab } from './components/BandsTab';
import { MusiciansTab } from './components/MusiciansTab';
import { RegistrationForm } from './components/RegistrationForm';
import { LogInForm } from './components/LogInForm';

function App() {
  return (
    <GlobalProvider className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route path='bands' element={<BandsTab />}></Route>
            <Route path='musicians' element={<MusiciansTab />}></Route>
          </Route>
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/login' element={<LogInForm />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
