import { Navigate, Route, Routes } from "react-router-dom";
import {
  Activities,
  Destination,
  Home,
  Login,
  SignUp,
  Specials,
} from "./pages";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
