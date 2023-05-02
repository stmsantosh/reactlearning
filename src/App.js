import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar title="santoshr" aboutText="ABOUT" /> */}
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze" /></div>
      <Footer />
    </>
  );
}

export default App;
