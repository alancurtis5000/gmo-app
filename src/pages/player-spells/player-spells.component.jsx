import Container from "../../components/container/container.component";
import Card from "../../components/card/card.component";
import Table from "../../components/table/table.component";

const PlayerSpellsPage = () => {
  return (
    <div>
      PlayerSpellsPage
      <div style={{ padding: "20px" }}>
        <Container className="details-container">
          <Card>Card One</Card>
          <Card>Card Two</Card>
          <Table>Table</Table>
        </Container>
      </div>
    </div>
  );
};

export default PlayerSpellsPage;
