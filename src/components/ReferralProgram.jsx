import React, { useEffect } from "react";
import { Chart as ChartJS } from "chart.js";
import { labels, data, config } from "./Chart.js";
import "./customTooltip.css";

const ReferralProgram = () => {
  useEffect(() => {
    const ctx = document.getElementById("canvas").getContext("2d");

    if (ChartJS.getChart("canvas")) {
      ChartJS.getChart("canvas").destroy();
    }

    new ChartJS(ctx, config);
  }, []);

  return (
    <div className="pt-20 px-14 pb-4 flex justify-between text-white border-b border-custom bg-gradient-to-l from-color-dark to-custom-dark">
      <div className="mr-12">
        <h1 className="text-3xl font-bold mb-4">
          Unlock Rewards with the Copin Referral Program
        </h1>
        <p className="mb-4 text-gray-400">
          Earn rebates and commissions by inviting friends.
          <p>Grow your network and benefit from our 6-tier reward system.</p>
        </p>
        <a href="#" className="text-blue-300">
          View referral Ranking →
        </a>
      </div>
      <div className="justify-between">
        <canvas id="canvas" width="362" height="180"></canvas>
        <div className="flex justify-evenly mt-4">
          {Array.from({ length: 6 }).map((_, i) => {
            const imageSrc = `/images/Tier${i + 1}.svg`; // Tạo đường dẫn ảnh từ chỉ số i
            const addClassesTier = i === 0 || i === 1 ? "mt-1" : "";
            const addClassesTierImg =
              i === 0 || i === 1 || i === 2 || i === 3 ? "mt-[10px]" : "mt-1";
            return (
              <div key={i} className={`flex flex-col items-center`}>
                <img
                  src={imageSrc}
                  alt={`Tier ${i + 1}`}
                  className={`rounded-full object-cover z-50 ${addClassesTierImg} mb-1`} // Thêm margin-bottom cho khoảng cách giữa ảnh và chữ
                />
                <div className={`${addClassesTier}`}>Tier {i + 1}</div>
                {i === 4 && (
                  <img
                    className="absolute top-70px"
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
