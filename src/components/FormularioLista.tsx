import { Component, useState } from "react";
import { ItemsLista } from "./ItemsLista"

export const FormularioLista = () => {
    const [itemsLista, setItemsLista] = useState<any[]>([]);
    const handleAgregar = () => {
        setItemsLista([...itemsLista, {}]);
        console.log("Hola");
    }
    return(
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Formulario de lista</h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre de la lista</label>
                        <input type="text" className="form-control" id="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha de compra</label>
                        <input type="date" className="form-control" id="fecha" />
                    </div>
                    <div className="mb-3" id="productos">
                        <h6 className="card-title">Productos</h6>
                        <ItemsLista key={0} onAgregar={handleAgregar} />
                        {itemsLista.map((_, index) => (
                            <ItemsLista key={index+1} onAgregar={handleAgregar} />
                        ))}

                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    )
}