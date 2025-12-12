import Home from './pages/Home';
import Contact from './pages/Contact';
import FreePack from './pages/FreePack';
import HowToBuy from './pages/HowToBuy';
import MadMidiPack from './pages/MadMidiPack';
import MaxPack from './pages/MaxPack';
import Packs from './pages/Packs';
import ProPack from './pages/ProPack';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import SiteManage from './pages/SiteManage';
import GuiMe from './pages/GuiMe';
import BuyNow from './pages/BuyNow';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Contact": Contact,
    "FreePack": FreePack,
    "HowToBuy": HowToBuy,
    "MadMidiPack": MadMidiPack,
    "MaxPack": MaxPack,
    "Packs": Packs,
    "ProPack": ProPack,
    "ProductDetail": ProductDetail,
    "Products": Products,
    "SiteManage": SiteManage,
    "GuiMe": GuiMe,
    "BuyNow": BuyNow,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};