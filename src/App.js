import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import Notfoundpage from "./components/Notfoundpage";

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  );
}

export default App;
