import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Services from "./Services";
import Timeline from "./Timeline";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Timeline></Timeline>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}

export default App;
