import { Container } from 'react-bootstrap';
import './App.css';
import Header from './componenets/header';

import Footer from './componenets/footer';
import HomeScreen from './screens/homeScreen';

const App = () => {
  return (
    
    <>
     <Header />
     <main className='py-3'>
      <Container  >
         <HomeScreen />
        
      </Container>
     </main>
     <Footer />
    </>
  );
}

export default App;
