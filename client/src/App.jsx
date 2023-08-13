import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='max-h-screen'>
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path='/videos/:id'
          element={
            <div className='max-h-screen'>
              <Navbar />
              <VideoDetail />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
