import React from "react";
import ReferralProgram from "./components/ReferralProgram";
import HowItWorks from "./components/HowItWorks";
import ApplyProgram from "./components/ApplyProgram";
import './index.css'

const App = () => {
  return (
    <div className="bg-custom-dark text-white min-h-screen font-anuphan">
      <ReferralProgram />
      <div className="p-4">
        <HowItWorks />
        <ApplyProgram />
      </div>
    </div>
  );
};

export default App;
