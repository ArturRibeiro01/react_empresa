import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import About from "./components/About/About";
import Services from "./components/ServicesPage/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Prices from "./components/prices/Prices";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Admin from "./admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route path="/" exact component={About} />
        <Route path="/servicos" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/precos" component={Prices} />
        <Route path="/contato" component={Contacts} />

        {/* Admin */}
        <Route path="/area_admin" component={Admin} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
