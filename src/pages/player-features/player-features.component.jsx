import { useSelector } from "react-redux";

const PlayerFeaturesPage = () => {
  const character = useSelector((state) => state.userCharacter.data);

  return <div>PlayerFeaturesPage</div>;
};

export default PlayerFeaturesPage;
