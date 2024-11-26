import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const DashCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/pexels-anna-nekrashevich-6801648.jpg" />
      <Card.Body>
        <Card.Title>Dashboard</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}