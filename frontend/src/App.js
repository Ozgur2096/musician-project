import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { HomePage } from './components/HomePage';
import { BandsTab } from './components/BandsTab';
import { MusiciansTab } from './components/MusiciansTab';
import { RegistrationForm } from './components/RegistrationForm';
import { LogInForm } from './components/LogInForm';
import { HomePageUser } from './components/HomePageUser';
import { MyPage } from './components/MyPage';
import { Favorites } from './components/Favorites';
import { MyNotifications } from './components/MyNotifications';
import { MyCards } from './components/MyCards';

function App() {
  return (
    <GlobalProvider className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route path='bands' element={<BandsTab />}></Route>
            <Route path='musicians' element={<MusiciansTab />}></Route>
            <Route path='/' element={<Navigate to='/bands' replace />} />
          </Route>
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/login' element={<LogInForm />}></Route>
          <Route path='/user/home/' element={<HomePageUser />}>
            <Route path='bands' element={<BandsTab />}></Route>
            <Route path='musicians' element={<MusiciansTab />}></Route>
            <Route
              path='/user/home/'
              element={<Navigate to='/user/home/bands' replace />}
            />
          </Route>
          <Route path='/user/mypage/' element={<MyPage />}>
            <Route path='mycards' element={<MyCards />} />
            <Route path='notifications' element={<MyNotifications />} />
            <Route
              path='/user/mypage/'
              element={<Navigate to='/user/mypage/mycards' replace />}
            />
          </Route>
          <Route path='/user/favorites/' element={<Favorites />}>
            <Route path='bands' element={<BandsTab />}></Route>
            <Route path='musicians' element={<MusiciansTab />}></Route>
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
