import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await fetch("/Productos.json");
      const data = await response.json();
      setProductos(data);
    }
    fetchProductos();
  }, []);



  // Filtrar productos por categoría
  const productosFiltrados = productos.filter(producto => 
    producto.categoria.id === "abrigos" ||
    producto.categoria.id === "remeras" ||
    producto.categoria.id === "pantalones"
  );
  
  // Ordenar los productos de forma aleatoria
  productosFiltrados.sort(() => Math.random() - 0.5);


  return (
    <Row xs={1} md={3} lg={6} className="g-4">
      {productosFiltrados.map((producto, idx) => (
        <Col key={idx}>
          <Card className="producto-detalles">
            <Card.Img variant="top" className="producto-imagen" src={producto.imagen} />
            <Card.Body>
              <Card.Title className="producto-titulo">{producto.titulo}</Card.Title>
              <Card.Text className="producto-descripcion">{producto.descripcion}</Card.Text>
              <Card.Text className="producto-precio">{producto.precio}</Card.Text>
              <Button variant="danger"> Agregar</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;