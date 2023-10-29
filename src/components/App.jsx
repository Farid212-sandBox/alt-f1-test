import Card from "./Card";
import data from "../data/response.json";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "5rem", marginBottom: "3rem" }}
      >
        test alt-f1
      </h1>
      <Container>
        <Row>
          {data.map((el, i) => (
            <Col key={i} xs={12} sm={6} md={3} style={{ margin: "2rem" }}>
              <Card data={el} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
