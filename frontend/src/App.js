import { Container } from 'react-bootstrap';
import './App.css';

import Header from './componenets/header';
import Footer from './componenets/footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    
    <>
     <Header />
     <main className='py-3'>
      <Container  >
         <Outlet />
        
      </Container>
     </main>
     <Footer />
    </>
  );
}

export default App;
