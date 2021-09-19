import Container from "../../components/container/container.component";
import Card from "../../components/card/card.component";

const PlayerSpellsPage = () => {
  return (
    <div>
      PlayerSpellsPage
      <div style={{ padding: "20px" }}>
        <Container className="details-container">
          <Card>Card One</Card>
          <Card>Card Two</Card>
        </Container>
      </div>
    </div>
  );
};

export default PlayerSpellsPage;
