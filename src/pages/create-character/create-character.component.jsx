import { useEffect, useState } from "react";
// import { API } from "aws-amplify";
import Button from "../../components/button/button.component";
// import { createCharacter as createCharacterMutation } from "../../graphql/mutations";
// import { Auth } from "aws-amplify";

const initialFormState = { name: "", content: "" };

const CreateCharacter = () => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {}, []);

  async function createCharacter() {
    console.log("createCharacter");
    // if (!formData.name || !formData.content) return;
    // try {
    //   const user = await Auth.currentUserInfo();
    //   console.log({ user });
    //   const userID = user.attributes.sub;
    //   const input = { ...formData, userID };
    //   console.log({ input });
    //   const response = await API.graphql({
    //     query: createCharacterMutation,
    //     variables: { input: input },
    //   });
    //   console.log("createCharacter mutation", { response });
    //   setFormData(initialFormState);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="create-character page">
      <h1>Create Character</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Character Name"
        value={formData.name}
      />
      <input
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Content"
        value={formData.content}
      />
      <Button text="Create Character" onClick={createCharacter} />
    </div>
  );
};

export default CreateCharacter;
