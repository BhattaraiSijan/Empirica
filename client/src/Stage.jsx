import {
  usePlayer,
  usePlayers,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";
import { Loading } from "@empirica/core/player/react";
import React from "react";
import { Stage1 } from "./Stages/Stage1";
import { Stage2 } from "./Stages/Stage2";
import { Result } from "./Stages/Result";

export function Stage() {
  const player = usePlayer();
  const players = usePlayers();
  const round = useRound();
  const stage = useStage(); 

  if (player.stage.get("submit")) {
    if (players.length === 1) {
      return <Loading />;
    }

    return (
      <div className="text-center text-gray-400 pointer-events-none">
        Please wait for other player(s).
      </div>
    );
  }
  switch (stage.get("name")) {
    case "Stage1":
      return <Stage1/>;
    case "Stage2":
      return <Stage2/>;
    case "result":
      return <Result/>;
    default:
      return <Loading />;
  }
}
