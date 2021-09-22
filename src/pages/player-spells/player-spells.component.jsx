import Container from "../../components/container/container.component";
import Card from "../../components/card/card.component";
import { useSelector } from "react-redux";

const PlayerSpellsPage = () => {
  const character = useSelector((state) => state.userCharacter.data);

  const renderSubSection = (section) => {
    return character[section].map((detail) => (
      <Card data={detail} section={section} />
    ));
  };

  const renderAll = () => {
    let allSections = [];
    for (const section in character) {
      allSections.push(
        <Container className={section} label={section}>
          {renderSubSection(section)}
        </Container>
      );
    }
    return allSections;
  };

  return (
    <div>
      PlayerSpellsPage
      <div style={{ padding: "20px" }}>{renderAll()}</div>
    </div>
  );
};

export default PlayerSpellsPage;
