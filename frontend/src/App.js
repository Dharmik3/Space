import './App.css';

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/authenticate/Authenticate'
import Activate from './pages/activate/Activate';
import Rooms from './pages/rooms/Rooms';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './components/shared/Loader/Loader';

function App() {

  const {loading}=useLoadingWithRefresh();

  const GuestRoute = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
      !isAuth ? <Outlet /> : <Navigate to='/rooms' />
    )
  }

  const SemiProtectedRoute = () => {
    const { user, isAuth } = useSelector((state) => state.auth);
    return (
      !isAuth ? <Navigate to='/' /> : isAuth
        && !user.activated ? <Outlet /> : <Navigate to="/rooms" />
    )
  }
  const ProtectedRoute = () => {
    const { user, isAuth } = useSelector((state) => state.auth);
    return (
      !isAuth ? <Navigate to='/' /> : isAuth
        && !user.activated ? <Navigate to="/activate" /> : <Outlet/>
    )
  }


  return (
    loading ? (<Loader message={'Loading please wait...'} />):
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/authenticate' element={<Authenticate />} />
        </Route>
        <Route element={<SemiProtectedRoute />}>
          <Route path='/activate' element={<Activate />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/rooms' element={<Rooms />} />
        </Route>

        {/* <SemiProtectedRoute path="/activate">
          <Activate />
        </SemiProtectedRoute>
        <ProtectedRoute path="/rooms">
          <Rooms />
        </ProtectedRoute> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;