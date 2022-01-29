import { ErrorBoundary } from "react-error-boundary";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/home/home";
import Layout from './components/layout'
import ErrorPage from "./components/error-page";
import Favorite from "./pages/favorite/favorite";
import './App.css'
import {useActions} from './hook/useAction'
import {Movie} from './interfaces'
import * as localStorage from './localstorage'


function App() {
  const {restoreReduxState} = useActions()
  useEffect(()=>{
    const innerFunction = async () => {
      
      let data = await localStorage.getItem() as {
        data:{[key:number]:Movie},
        list:number[]
      }

      restoreReduxState(data)
      
    }

    innerFunction()

   // eslint-disable-next-line
  },[])

  return (
    <div className="App" data-test="app">
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
