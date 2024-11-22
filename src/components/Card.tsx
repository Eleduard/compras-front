import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type TarjetaProps = {
  imagen: string, titulo: string, texto: string
}

export const Tarjeta = ({imagen, titulo, texto}: TarjetaProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}