import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Packs from './pages/Packs';
import FreePack from './pages/FreePack';
import ProPack from './pages/ProPack';
import MaxPack from './pages/MaxPack';
import MadMidiPack from './pages/MadMidiPack';
import HowToBuy from './pages/HowToBuy';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Products": Products,
    "ProductDetail": ProductDetail,
    "Packs": Packs,
    "FreePack": FreePack,
    "ProPack": ProPack,
    "MaxPack": MaxPack,
    "MadMidiPack": MadMidiPack,
    "HowToBuy": HowToBuy,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};