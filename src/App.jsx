// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import ClassComponent from "./ClassComponenet"
// import CounterComponenet from "./CounterComponenet"
// import Home from "./Home"
// import SignUp from "./SignUp"
// import Welcome from "./Welcome"
// import ChangeBaground from "./ChangeBaground"

// import Arpita from "./Components/Arpita"
// import NarasaNarayan from "./Components/NarasaNarayan"
import Todolist from "./Components/Todolist";
import withLoginCheck from "./Components/withLoginCheck";


function App() {

  return (
    <>
    <div>
   
   <Todolist/>

   
     {/* <Arpita/>
     <NarasaNarayan/> */}
    </div>
    {/* <CounterComponenet/>
    <ClassComponent name='narasa' salary={25000}/>
    <Home/>
    <SignUp/>
    <ChangeBaground/>

    <BrowserRouter>
    <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default withLoginCheck(App) ;
