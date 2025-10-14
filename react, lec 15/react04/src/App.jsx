import '.App.css'
//import Card from './components/Card'
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App(){
    let name="Ashish Singh";
    let age = 20;
    let array=[23, 45,67,32];
    return(
    <div style={{ background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32 }}>
        <Main fname={name} fage={age} array={arr} />
      </main>
      <Footer />
    </div>
  )
}
export default App