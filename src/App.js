import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <div>
        <Logo/>
        <Header />

        <Footer title='Facebook' website='www.facebook.com' postcode={9200} isOpen />
    </div>
  );
}

export default App;
