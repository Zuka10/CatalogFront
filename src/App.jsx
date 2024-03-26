import { Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import LandingPage from "./pages/LandingPage";
import AdminPanel from "./layouts/AdminLayout";
import Dashboard from "./adminpanel/Dashboard";
import Index from "./adminpanel/category";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="movie-quotes/:movieId" element={<MovieQuotes />} />
          <Route path="login" element={<Login />} /> */}
        </Route>
        {/* <Route element={<RequireAuth />}>
          
        </Route> */}
        <Route path="/" element={<AdminPanel />}>
          <Route path="adminpanel/dashboard" element={<Dashboard />} />
          <Route path="/adminpanel/categories" element={<Index />}></Route>
          {/* <Route path="/adminpanel/category/create-data" element={<Create />} />
          <Route
            path="/adminpanel/category/:categoryId/edit"
            element={<Update />}
          />
          <Route path="/adminpanel/product" element={<Product />}></Route>
          <Route
            path="/adminpanel/product/create-quote"
            element={<CreateProduct />}
          />
          <Route
            path="/adminpanel/product/:productId/edit"
            element={<UpdateProduct />}
          /> */}
        </Route>
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
