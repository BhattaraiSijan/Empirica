import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Instruction One
      </h3>
      <div className="mt-2 mb-6">
      <h1>Welcome to the Risk and Reward Experiment!</h1>
        <p>In this experiment, you will be presented with a series of decision-making scenarios. Your task is to choose
            between two options, each associated with different levels of risk and potential rewards.</p>

        <h3>Task Description:</h3>
        <ul>
            <li><strong>Decisions:</strong> You will encounter multiple rounds where you need to choose between Option A
                and Option B.</li>
            <li><strong>Outcomes:</strong> Each option presents varying levels of potential rewards and risks.</li>
            <li><strong>Objective:</strong> Aim to maximize your cumulative rewards by making choices across multiple
                rounds.</li>
        </ul>

        <h3>Guidelines:</h3>
        <ul>
            <li><strong>Risk Consideration:</strong> Each choice involves different degrees of risk. Consider your
                decisions carefully.</li>
            <li><strong>Rewards and Consequences:</strong> Be aware that outcomes may vary based on your selections.</li>
            <li><strong>Anonymous Participation:</strong> Your decisions are anonymous and will not be shared.</li>
        </ul>

        <h3>Important Note:</h3>
        <ul>
            <li><strong>Decision-Making:</strong> There are no right or wrong choices. Your decisions shape your
                outcomes.</li>
            <li><strong>Consistency:</strong> Your decisions in each round contribute to your cumulative outcomes.</li>
        </ul>

        <h3>Instructions:</h3>
        <ul>
            <li>Carefully read each scenario and select either Option A or Option B based on your judgment.</li>
            <li>Make choices based on your personal preferences and risk tolerance.</li>
        </ul>

        <p>Thank you for your participation. Let's get started!</p>
      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
