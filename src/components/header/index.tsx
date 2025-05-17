import { useContext } from 'react';
import { ThemeContext } from '../theme-provider';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { FaRegMoon } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, logout } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/auth')
  }

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          Portal Social Network
        </p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex text-3xl cursor-pointer"
          onClick={() => toggleTheme()}
        >
          {theme === 'light' ? <FaRegMoon /> : <LuSunMedium />}
        </NavbarItem>

        <NavbarItem>
          {isAuthenticated && (
            <Button className="gap-2"
              color="default"
              variant="flat"
              onPress={handleLogout}
            >
              <CiLogout/> <span>Выйти</span>
            </Button>
          ) }
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}