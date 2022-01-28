import { ErrorBoundary } from "react-error-boundary";

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/home";
import Layout from './components/layout'
import ErrorPage from "./components/error-page";
import Favorite from "./pages/favorite/favorite";
import './App.css'


function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorPage}
      >
        <Layout>
          <Routes>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
            <Route path="/*" element={<Home/>}/>
          </Routes>
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
