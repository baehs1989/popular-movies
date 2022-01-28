import { ErrorBoundary } from "react-error-boundary";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import localForage from 'localforage';

import Home from "./pages/home/home";
import Layout from './components/layout'
import ErrorPage from "./components/error-page";
import Favorite from "./pages/favorite/favorite";
import './App.css'
import {useActions} from './hook/useAction'
import {Movie} from './interfaces'



function App() {
  const {restoreReduxState} = useActions()
  useEffect(()=>{
    const innerFunction = async () => {
      const movieCache = localForage.createInstance({
        name: 'moviecache'
      });
      
      let data = await movieCache.getItem('file-cache').then(res=>{
        return res
      }) as {
        data: {
          [key: number]: Movie;
        };
        list: number[];
      }

      restoreReduxState(data)
      
    }

    innerFunction()


  },[])

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
