import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import { useEffect } from 'react';

function App() {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) userStore.getUser().finally(() => commonStore.setAppLoaded());
    else commonStore.setAppLoaded();
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

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
