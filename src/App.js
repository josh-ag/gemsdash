import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Appbar } from "./components/appbar/appbar";
import { HomePage } from "./pages/home/home";
import { Users } from "./pages/users/users";
import { NotFound } from "./notFound";
import { UserDetails } from "./pages/userDetails/userDetails";
import { AppStateContext } from "./context/appContext";
import { CreateUser } from "./pages/createUser/createUser";
import { ProductsPage } from "./pages/products/products";
import { Layout } from "./components/layout";

function App() {
  return (
    <AppStateContext>
      <Router>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <ProductsPage />
              </Layout>
            }
          />
          <Route
            path="/user/add"
            element={
              <Layout>
                <CreateUser />
              </Layout>
            }
          />
          <Route
            path="/user/:id"
            element={
              <Layout>
                <UserDetails />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppStateContext>
  );
}

export default App;
