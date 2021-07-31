import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import PlayerRouter from "./player-router";
import GameMasterRouter from "./game-master-router";
import { useSelector, useDispatch } from "react-redux";
import { getGame as getGameRedux } from "../redux/game/game.actions";

const SplitRouter = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const gameId = match.params.gameId;
  const userId = useSelector((state) => state.user.id);
  const gameMasterId = useSelector((state) => state.game.data.master.id);
  const isGameMaster = userId === gameMasterId;

  useEffect(() => {
    dispatch(getGameRedux(gameId));
  }, [dispatch, gameId]);

  return isGameMaster ? <GameMasterRouter /> : <PlayerRouter />;
};

export default SplitRouter;
