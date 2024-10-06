
import Routing from "./Routes/route";
import Index from "./pages/Home";
import Card from "./components/card";
import CounterProvider  from "./pages/Contex/counterContext";







function App() {


  return (
    <>

     <CounterProvider>
     <Routing/>
     </CounterProvider>
   
   
     
    
    </>
  )
}

export default App
