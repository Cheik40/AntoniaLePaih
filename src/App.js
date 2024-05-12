import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommissionSoireRevelation from "./pages/CommissionSoireRevelation";
import CommissionCesarLyceen from "./pages/CommissionCesarLyceen";
// import CarouselGalleryCesar from "./componants/commissions/carousel/CarouselGalleryCesar";
import Contact from "./pages/Contact";
import CommissionCeremonieDesCesars from "./pages/CommissionCeremonieDesCesars";
import About from "./pages/About";
import CommissionDejeuneNommine from "./pages/CommissionDejeuneNommine";
import Home from "./pages/Home";
import ProjetCircus from "./pages/ProjetCircus";
import ProjetCacheCache from "./pages/ProjetCacheCache";
import ProjetLesEchappees from "./pages/ProjetLesEchappees";
import Project1 from "./componants/Projets/CarouselProjet";
import CommisionTheatre from "./pages/CommisionTheatre";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/commissionRevelation'
                    element={<CommissionSoireRevelation />}
                />
                <Route
                    path='/commissionCesarLyceen'
                    element={<CommissionCesarLyceen />}
                />
                <Route
                    path='/commissionCeremonieDesCesars'
                    element={<CommissionCeremonieDesCesars />}
                />
                <Route
                    path='/commissionDejeuneNommine'
                    element={<CommissionDejeuneNommine />}
                />
                <Route path='/theatre' element={<CommisionTheatre />} />

                <Route path='/about' element={<About />} />
                <Route path='/' element={<Contact />} />
                <Route path='/accueil' element={<Home />} />

                <Route path='/circus' element={<ProjetCircus />} />
                <Route path='/echappe' element={<ProjetLesEchappees />} />
                <Route path='/cache' element={<ProjetCacheCache />} />
                <Route path='/projet1' element={<Project1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
