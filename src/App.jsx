import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Listgroup from "./Components/Listgroup";
import Navbar from "./Components/Navbar";
import Totalreviews from "./Components/Totalreviews";

function App() {
  const [theme, setTheme] = useState(false);

  // ✅ Theme toggle function
  const switchTheme = () => {
    setTheme(!theme);
  };

  // ✅ custom styll hai baawa
  const CustomStyle = theme
    ? "bg-gray-900 text-red-700 placeholder:text-red-700"
    : "bg-gray-100 text-black placeholder:text-red-700";

  return (
    <>
      <Navbar switchTheme={switchTheme}  theme={theme}/>

      <div className={`${CustomStyle} min-h-screen `}>


      <div
        className=" md:flex justify-center align-center gap-10 px-4 "
      >
        <Form />

        <Listgroup />
      </div>
      <Totalreviews />

      </div>
    </>
  );
}

export default App;
