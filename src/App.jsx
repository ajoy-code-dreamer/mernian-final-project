import { BrowserRouter, Routes, Route } from "react-router";
import PublicProfilePage from "./pages/PublicProfilePage";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import FriendPage from "./pages/FriendPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CommonLayout from "./components/CommonLayout";
import NewsFeedPage from "./pages/NewsFeedPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route path="/" element={<PublicProfilePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/friend" element={<FriendPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/news-feed" element={<NewsFeedPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
