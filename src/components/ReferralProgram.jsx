import React, { useEffect } from "react";
import { Chart as ChartJS } from "chart.js";
import { labels, data, config } from "./Chart.js";
import "../Style/CustomCanvas.css";

const ReferralProgram = () => {
  useEffect(() => {
    const ctx = document.getElementById("canvas").getContext("2d");

    if (ChartJS.getChart("canvas")) {
      ChartJS.getChart("canvas").destroy();
    }

    new ChartJS(ctx, config);
  }, []);

  return (
    <div className="pt-20 pl-14 pr-16 pb-4 justify-between text-white border-b border-borderColor bg-gradient-to-l from-gray-color to-main-color-bg md:flex">
      <div className="sm:mr-12 mb-[50px]">
        <h1 className="2xl:text-4xl font-bold mb-4 md:text-3xl xl:text-3xl sm:text-3xl max-sm:text-3xl max-sm:text-center">
          Unlock Rewards with the Copin Referral Program
        </h1>
        <p className="mb-4 2xl:text-xl text-gray-400 md:text-base max-sm:text-center">
          Earn rebates and commissions by inviting friends.
          <p>Grow your network and benefit from our 6-tier reward system.</p>
        </p>
        <a
          href="#"
          className="text-blue-300 2xl:text-base md:text-sm max-sm:flex max-sm:justify-center"
        >
          View referral Ranking →
        </a>
      </div>
      <div className="image-tier justify-between mr-2">
        <canvas
          id="canvas"
          width="326"
          height="180"
          className="canvas-2xl"
        ></canvas>
        <div className="flex justify-evenly mt-4">
          {Array.from({ length: 6 }).map((_, i) => {
            const imageSrc = `/images/Tier${i + 1}.svg`;
            const addClassesTier = i === 0 || i === 1 ? "mt-1" : "";
            const addClassesTierImg =
              i === 0 || i === 1 || i === 2 || i === 3 ? "mt-[10px]" : "mt-1";
            return (
              <div key={i} className={`flex flex-col items-center`}>
                <img
                  src={imageSrc}
                  alt={`Tier ${i + 1}`}
                  className={`rounded-full object-cover z-50 ${addClassesTierImg} mb-1 `}
                />
                <div className={`${addClassesTier}`}>Tier {i + 1}</div>
                {i === 4 && (
                  <img
                    className="absolute top-70px img-2xl"
                    src="/images/Glint.svg"
                    alt="Glint"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
