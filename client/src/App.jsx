import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path='/videos/:id'
          element={
            <>
              <Navbar />
              <VideoDetail />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
