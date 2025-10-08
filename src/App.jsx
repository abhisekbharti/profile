
import SearchBox from "./assets/Search"
import Heading from "./assets/Heading"
import Projects from "./assets/Projects"
import Footer from "../src/assets/Footer"
import './App.css'



function App() {
  return (
    <div className="App bg-gray-500 text-orange">
      <SearchBox onSearch={(query) => console.log('Searching for:', query)} />
      <Heading />
      <Projects />
      <Footer />
    </div>
  )
};
  
export default App;