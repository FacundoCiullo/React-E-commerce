import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Carrito() {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const contenedorCarritoVacioRef = useRef(null);
    const contenedorCarritoProductosRef = useRef(null);
    const contenedorCarritoAccionesRef = useRef(null);
    const contenedorCarritoCompradoRef = useRef(null);
    const botonVaciarRef = useRef(null);
    const contenedorTotalRef = useRef(null);
    const botonComprarRef = useRef(null);
    const botonesEliminarRef = useRef([]);

    useEffect(() => {
        const productosEnCarritoString = localStorage.getItem(
        "productos-en-carrito"
        );
        const productosEnCarritoJSON = JSON.parse(productosEnCarritoString);
        setProductosEnCarrito(productosEnCarritoJSON);
    }, []);

    useEffect(() => {
        cargarProductosCarrito();
    }, [productosEnCarrito]);

    function cargarProductosCarrito() {
        if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacioRef.current.classList.add("disabled");
        contenedorCarritoProductosRef.current.classList.remove("disabled");
        contenedorCarritoAccionesRef.current.classList.remove("disabled");
        contenedorCarritoCompradoRef.current.classList.add("disabled");

        ReactDOM.render(
            productosEnCarrito.map((producto) => (
            <div key={producto.id} className="carrito-producto">
                <img
                className="carrito-producto-imagen"
                src={producto.imagen}
                alt={producto.titulo}
                />
                <div className="carrito-producto-titulo">
                <small>Producto</small>
                <h3>{producto.titulo}</h3>
                </div>
                <div className="carrito-producto-cantidad">
                <small>Cantidad</small>
                <div className="cantidad-botones">
                    <button
                    className="boton-restar"
                    data-id={producto.id}
                    onClick={restarCantidad}
                    >
                    -
                    </button>
                    <p>{producto.cantidad}</p>
                    <button
                    className="boton-sumar"
                    data-id={producto.id}
                    onClick={sumarCantidad}
                    >
                    +
                    </button>
                </div>
                </div>
                <div className="carrito-producto-precio">
                <small>Precio</small>
                <p>{producto.precio}</p>
                </div>
                <div className="carrito-producto-eliminar">
                <button
                className="boton-eliminar"
                data-id={producto.id}
                onClick={eliminarProducto}
                ref={(boton) => {
                botonesEliminarRef.current[producto.id] = boton;
                }}
                >
                Eliminar
                </button>
                </div>
                </div>
                )),
                contenedorCarritoProductosRef.current
                );

                contenedorTotalRef.current.textContent = `Total: ${calcularTotal()} €`;
            } else {
            contenedorCarritoVacioRef.current.classList.remove("disabled");
            contenedorCarritoProductosRef.current.classList.add("disabled");
            contenedorCarritoAccionesRef.current.classList.add("disabled");
            contenedorCarritoCompradoRef.current.classList.add("disabled");
            }
        }
        
        function calcularTotal() {
            let total = 0;
            productosEnCarrito.forEach((producto) => {
            total += producto.cantidad * producto.precio;
            });
            return total.toFixed(2);
        }
        
        function restarCantidad(e) {
            const idProducto = Number(e.target.dataset.id);
            const productosEnCarritoActualizados = productosEnCarrito.map(
            (producto) => {
                if (producto.id === idProducto && producto.cantidad > 1) {
                producto.cantidad--;
                }
                return producto;
            }
            );
            setProductosEnCarrito(productosEnCarritoActualizados);
            localStorage.setItem(
            "productos-en-carrito",
            JSON.stringify(productosEnCarritoActualizados)
            );
        }
        
        function sumarCantidad(e) {
            const idProducto = Number(e.target.dataset.id);
            const productosEnCarritoActualizados = productosEnCarrito.map(
            (producto) => {
                if (producto.id === idProducto) {
                producto.cantidad++;
                }
                return producto;
            }
            );
            setProductosEnCarrito(productosEnCarritoActualizados);
            localStorage.setItem(
            "productos-en-carrito",
            JSON.stringify(productosEnCarritoActualizados)
            );
        }
        
        function eliminarProducto(e) {
            const idProducto = Number(e.target.dataset.id);
            const productosEnCarritoActualizados = productosEnCarrito.filter(
            (producto) => producto.id !== idProducto
            );
            setProductosEnCarrito(productosEnCarritoActualizados);
            localStorage.setItem(
            "productos-en-carrito",
            JSON.stringify(productosEnCarritoActualizados)
            );
        }
        
        function vaciarCarrito() {
            setProductosEnCarrito([]);
            localStorage.removeItem("productos-en-carrito");
        }
        
        function comprar() {
            vaciarCarrito();
            contenedorCarritoProductosRef.current.innerHTML = "";
            contenedorTotalRef.current.textContent = "Total: 0 €";
            contenedorCarritoProductosRef.current.classList.add("disabled");
            contenedorCarritoAccionesRef.current.classList.add("disabled");
            contenedorCarritoCompradoRef.current.classList.remove("disabled");
        }
        
        return (
            <div>
            <div ref={contenedorCarritoVacioRef}>
                <p>No hay productos en el carrito</p>
            </div>
            <div ref={contenedorCarritoProductosRef} className="disabled">
                <div className="carrito-productos-titulo">
                <small>Producto</small>
                <small>Cantidad</small>
                <small>Precio</small>
                </div>
            </div>
            <div ref={contenedorCarritoAccionesRef} className="disabled">
<div className="carrito-acciones">
<button ref={botonVaciarRef} onClick={vaciarCarrito}>
Vaciar carrito
</button>
<div ref={contenedorTotalRef}>Total: {calcularTotal()} €</div>
<button ref={botonComprarRef} onClick={comprar}>
Comprar
</button>
</div>
</div>
<div ref={contenedorCarritoCompradoRef} className="disabled">
<p>Gracias por su compra!</p>
</div>
{productosEnCarrito.map((producto) => (
<div key={producto.id} className="carrito-producto">
<img
    className="carrito-producto-imagen"
    src={producto.imagen}
    alt={producto.titulo}
/>
<div className="carrito-producto-titulo">
<h3>{producto.titulo}</h3>
</div>
<div className="carrito-producto-cantidad">
<div className="cantidad-botones">
<button
    className="boton-restar"
    data-id={producto.id}
    onClick={restarCantidad}
>
-
</button>
<p>{producto.cantidad}</p>
<button
    className="boton-sumar"
    data-id={producto.id}
    onClick={sumarCantidad}
>
+
</button>
</div>
</div>
<div className="carrito-producto-precio">
{producto.precio} €
</div>
<button
className="boton-eliminar"
data-id={producto.id}
onClick={eliminarProducto}
ref={(el) => botonesEliminarRef.current.push(el)}
>
Eliminar
</button>
</div>
))}
</div>
);
}


export default Carrito;

ReactDOM.render(<Carrito />, document.getElementById("root"));