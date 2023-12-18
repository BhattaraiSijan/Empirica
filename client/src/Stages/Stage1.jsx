import React from "react";
import { Button } from "../components/Button";

export function Stage1() {
  return (
    <div>
      <h2>Risk Tolerance Game</h2>
      <p>Choose an option:</p>
      <div className="flex justify-center">
          <Button className="m-5">Option AA</Button>
          <Button className="m-5">Option B</Button>
        </div>
    </div>
  );
} 