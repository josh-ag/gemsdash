import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Appbar } from "./components/appbar/appbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { HomePage } from "./pages/home/home";
import { Users } from "./pages/users/users";
import { NoMatch } from "./noMatch";
import { UserDetails } from "./pages/userDetails/userDetails";
import { AppStateContext } from "./context/appContext";
import { CreateUser } from "./pages/createUser/createUser";
import { ProductsPage } from "./pages/products/products";

import "./app.css";

function App() {
  return (
    <Router>
      <AppStateContext>
        <Appbar />

        <div className="Container">
          <Sidebar />

          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/user/add">
              <CreateUser />
            </Route>
            <Route path="/user/:id">
              <UserDetails />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route> */}
          </Routes>
        </div>
      </AppStateContext>
    </Router>
  );
}

export default App;
