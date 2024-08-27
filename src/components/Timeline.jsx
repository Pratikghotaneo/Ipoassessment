import React, { useState } from "react";

import { TiTick } from "react-icons/ti";

const Timeline = () => {
  const steps = [
    { name: "Bidding starts:", date: "12 Dec 2023" },
    { name: "Bidding ends:", date: "15 Dec 2023" },
    { name: "Allotment finalization:", date: "18 Dec 2023" },
    { name: "Refund initiation:", date: "18 Dec 2023" },
    { name: "Demat transfer:", date: "18 Dec 2023" },
    { name: "Listing date", date: "21 Dec 2023" },
  ];
  const [currentStep, setCurrentStep] = useState(3);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="md:border rounded-xl p-5 my-4">
        <h2 className="text-lg font-semibold mb-3">IPO timeline</h2>
        <div className="stepper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index <= currentStep ? "active" : ""}`}
            >
              {index < steps.length - 1 && (
                <div
                  className={`step-line ${index < currentStep ? "filled" : ""}`}
                ></div>
              )}
              <div className="step-number">
                {index <= currentStep ? <TiTick /> : ""}
              </div>

              <div className="text-left md:text-center">
                <div className="step-label">{step.name}</div>
                <div className="text-xs font-light text-gray-500 ml-[20px] md:ml-0">
                  {step.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
