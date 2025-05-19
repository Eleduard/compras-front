type ItemsListaProps = {
    onAgregar: () => void;
};

export const ItemsLista = ({ onAgregar }: ItemsListaProps) => {
    return(
        <button type="button" onClick={onAgregar}>Agregar</button>
    )
}