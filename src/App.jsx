import { Outlet } from 'react-router-dom';
import Header from './mainComponents/Header'
import Footer from './mainComponents/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto px-4 font-poppins text-text py-8 lg:py-12'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;