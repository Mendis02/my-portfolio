import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import './style.css';

export default function App(){
    return(
        <div>
            <Info/>
            <About/>
            <Footer/>
        </div>
    )
}