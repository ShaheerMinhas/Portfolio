import { BrowserRouter } from "react-router-dom";
import './app2.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
       
          <Hero />
        </div>
        <div className="mb-40">
        <About />
        </div>
<div className="tech">

        <Tech />
</div>
       
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
