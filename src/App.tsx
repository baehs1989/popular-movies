import Home from "./pages/home/home";
import Layout from './components/layout'
import './App.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
