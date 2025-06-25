import { BrowserRouter, Routes, Route } from "react-router";
import PublicProfilePage from "./pages/PublicProfilePage";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import FriendPage from "./pages/FriendPage";
import NewsfeedPage from "./pages/NewsfeedPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicProfilePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/friend" element={<FriendPage />} />
      <Route path="/newsfeed" element={<NewsfeedPage />} />
    </Routes>
  );
}

export default App;
