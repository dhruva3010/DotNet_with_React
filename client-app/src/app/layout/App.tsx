import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <Outlet />
      </Container>
    </>
  )
}

export default observer(App);
