import React from "react";

const TierSystem = () => {
  return (
    <div className="bg-dark-blue text-white">
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:grid-cols-1 max-sm:grid-cols-1">
        <div className="border border-borderColor p-8 rounded">
          <img
            className="mb-8 w-18 max-sm:w-16 max-sm:h-16 sm:w-16 sm:h-16 h-22 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 block max-md:mx-auto md:mx-0"
            src="/Images/ReferralSystem.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2 2xl:text-2xl max-md:text-center sm:text-xl max-sm:text-xl">
            1. Two-Level Referral System
          </h3>
          <p className="text-gray-400 2xl:text-xl lg:text-sm max-md:text-center">
            Invite friends and earn from two levels: F1 (your referrals) and F2
            (their referrals).
          </p>
        </div>
        <div className="ml-1 border border-borderColor p-8 rounded">
          <img
            className="mb-8 w-18 max-sm:w-16 max-sm:h-16 sm:w-16 sm:h-16 h-22 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 block max-md:mx-auto md:mx-0"
            src="/Images/Commission.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2 2xl:text-2xl max-md:text-center sm:text-xl max-sm:text-xl">
            2. Earn Rebates & Commissions
          </h3>
          <p className="text-gray-400 2xl:text-xl lg:text-sm max-md:text-center">
            Earn rebates on your trades and commissions from F1 and F2.
          </p>
        </div>
        <div className="ml-1 border border-borderColor p-8 rounded">
          <img
            className="mb-8 w-18 max-sm:w-16 max-sm:h-16 sm:w-16 sm:h-16 h-22 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 block max-md:mx-auto md:mx-0"
            src="/Images/Reward.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2 2xl:text-2xl max-md:text-center sm:text-xl max-sm:text-xl">
            3. Claim Daily Rewards
          </h3>
          <p className="text-gray-400 2xl:text-xl lg:text-sm max-md:text-center">
            Rewards are credited after trades close and claimable daily at 0:00
            UTC.
          </p>
        </div>
        <div className="ml-1 border border-borderColor p-8 rounded">
          <img
            className="mb-8 w-18 max-sm:w-16 max-sm:h-16 sm:w-16 sm:h-16 h-22 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 block max-md:mx-auto md:mx-0"
            src="/Images/Referral.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2 2xl:text-2xl max-md:text-center sm:text-xl max-sm:text-xl">
            4. Referral Tier System
          </h3>
          <p className="text-gray-400 2xl:text-xl lg:text-sm max-md:text-center">
            Your tier is based on total fees paid by F0, F1, and F2 over the
            last 30 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TierSystem;
