// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import AboutPage from "./pages/AboutPage";
// import ProductPage from "./pages/ProductPage";
// import ContactPage from "./pages/ContactPage";
// import AddProduct from "./pages/admin/AddProduct";
// import NavbarComponent from "./components/NavbarComponent";

// const App: React.FC = () => {
//   return (
//     <>
//       <NavbarComponent />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<RegisterPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/product/:id" element={<ProductPage />} />
//         <Route path="/admin/addProduct" element={<AddProduct />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

function App() {
  const [name, setName] = useState("");

  function warningNotification() {
    addNotification({
      title: "Warning",
      subtitle: "Please fill it",
      message: "You have to enter name",
      theme: "red",
      closeButton: "X",
    });
  }

  function successNotification() {
    addNotification({
      title: "Success",
      subtitle: "You have successfully submitted",
      message: `Welcome to GeeksforGeeks ${name}`,
      theme: "darkblue",
      closeButton: "X",
      backgroundTop: "blue",
      backgroundBottom: "lightgreen",
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (name === "") warningNotification();
    else successNotification();
  }

  return (
    <div className="App">
      <Notifications />
      <h1>Hey Geek!</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
