import { useState } from "react";
import { API } from "aws-amplify";
import Button from "../../components/button/button.component";
import { createCharacter as createCharacterMutation } from "../../graphql/mutations";
import { useSelector } from "react-redux";
import CreateCharacterAbilities from "../../components/create-character-abilities/create-character-abilities.component";
import CreateCharacterDetails from "../../components/create-character-details/create-character-details.component";

const initialFormState = { name: "", content: "" };

const CreateCharacter = () => {
  const [formData, setFormData] = useState(initialFormState);
  const userId = useSelector((state) => state.user.id);

  async function createCharacter() {
    if (!formData.name || !formData.content) return;

    try {
      const input = { ...formData, characterUserId: userId };
      await API.graphql({
        query: createCharacterMutation,
        variables: { input: input },
      });
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="create-character page">
      <h1>Create Character</h1>
      <CreateCharacterDetails />
      <CreateCharacterAbilities />

      <Button text="Create Character" onClick={createCharacter} />
    </div>
  );
};

export default CreateCharacter;
