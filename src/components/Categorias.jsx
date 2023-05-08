import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from './categorias/Cards';
import CardsAbrigos from './categorias/CardsAbrigos';
import CardsRemeras from './categorias/CardsRemeras';
import CardsPantalones from './categorias/CardsPantalones';

function Categorias() {
  return (
    <Tabs
      defaultActiveKey="Todas"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Todas" title="Todas">
        <Cards />
      </Tab>
      <Tab eventKey="Abrigos" title="Abrigos">
        <CardsAbrigos />
      </Tab>
      <Tab eventKey="Camisetas" title="Remeras">
        <CardsRemeras />
      </Tab>
      <Tab eventKey="Pantalones" title="Pantalones">
        <CardsPantalones />
      </Tab>
    </Tabs>
  );
}

export default Categorias;