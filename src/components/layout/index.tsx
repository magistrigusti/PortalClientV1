import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../header';
import { Container } from '../container';
import { NavBar } from '../nav-bar';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../../features/user/userSlice';

export const Layout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  return (
    <>
      <Header />

      <Container>
        <div className="flex-2-p4">
          <NavBar />
        </div>

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </Container>
    </>
  )
}