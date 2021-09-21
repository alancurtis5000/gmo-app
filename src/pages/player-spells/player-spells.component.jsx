import Container from "../../components/container/container.component";
import Card from "../../components/card/card.component";
import Table from "../../components/table/table.component";
import { useSelector } from "react-redux";

const PlayerSpellsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const renderAbilityScores = () => {
    const section = "abilityScores";
    return character[section].map((abilityScore) => (
      <Card data={abilityScore} section={section} />
    ));
  };

  return (
    <div>
      PlayerSpellsPage
      <div style={{ padding: "20px" }}>
        <Container className="details-container">
          {renderAbilityScores()}
        </Container>
      </div>
    </div>
  );
};

export default PlayerSpellsPage;
