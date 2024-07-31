import React from "react";
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import SecondPage from "./components/SecondPage.jsx";
import HomePage from "./auth/HomePage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";
import { FormProvider } from "./context/FormContext.jsx";
import FirstPage from "./components/FirstPage.jsx";
import SignUp from "./auth/SignUp.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import Submit from "./components/Submit.jsx";

function App() {
  // const[appData , setAppData] = useState("App State");
  return (                   
    <BrowserRouter>
    <AuthProvider>
    <FormProvider>
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/firstPage' element={<FirstPage />}></Route>
    <Route path='/secondPage' element={<SecondPage/>}></Route>
    <Route path="/thirdPage" element={<ThirdPage/>}></Route>
    <Route path="/submit" element={<Submit/>}></Route>
    </Routes>
    </FormProvider>
    </AuthProvider>
    </BrowserRouter>      
  )
}
export default App;