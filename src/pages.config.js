import BuyNow from './pages/BuyNow';
import Contact from './pages/Contact';
import FreePack from './pages/FreePack';
import GuiMe from './pages/GuiMe';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import MadMidiPack from './pages/MadMidiPack';
import MaxPack from './pages/MaxPack';
import Packs from './pages/Packs';
import ProPack from './pages/ProPack';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import SiteManage from './pages/SiteManage';
import __Layout from './Layout.jsx';


export const PAGES = {
    "BuyNow": BuyNow,
    "Contact": Contact,
    "FreePack": FreePack,
    "GuiMe": GuiMe,
    "Home": Home,
    "HowToBuy": HowToBuy,
    "MadMidiPack": MadMidiPack,
    "MaxPack": MaxPack,
    "Packs": Packs,
    "ProPack": ProPack,
    "ProductDetail": ProductDetail,
    "Products": Products,
    "SiteManage": SiteManage,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};