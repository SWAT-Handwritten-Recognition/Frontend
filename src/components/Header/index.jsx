/**
 * This is header component show user login or sign up option
 */
import { HeaderContainer, LogoContainer, ButtonsContainer, Button, InfoContainer, UserInfo } from './styled'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/Logo/index.jsx'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = ({ scroll, normal, user }) => {
  const history = useHistory()
  const [thereIsUser, setThereIsUser] = useState(false)

  const handleSignUp = () => history.push('/signup')

  const handleSignIn = () => history.push('/signin')

  const handleLogout = () => {}

  useEffect(() => {
    if (user) {
      if (Object.entries(user).length === 2) {
        setThereIsUser(value => value = true)
      } else {
        setThereIsUser(value => value = false)
      }
    }
  }, [user])

  return (
    <HeaderContainer normal={normal} scroll={scroll}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {thereIsUser ?
        <InfoContainer>
          <UserInfo>
            <Button>Welcome {user?.status?.username}</Button>
            <Button onClick={handleLogout}>Logout</Button>
          </UserInfo>
        </InfoContainer> :
        <ButtonsContainer>
          <Button onClick={handleSignIn}>Sign In</Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </ButtonsContainer>
      }
    </HeaderContainer >
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
