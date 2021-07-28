import UserCharacter from "../../components/user-character/user-character.component";
import Header from "../../components/header/header.component";
const CreateCharacter = () => {
  return (
    <div className="create-character page">
      <Header title="Create Character" />
      <UserCharacter isCreateCharacter />
    </div>
  );
};

export default CreateCharacter;
