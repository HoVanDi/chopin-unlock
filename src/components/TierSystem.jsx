import React from "react";

const TierSystem = () => {
  return (
    <div className="bg-dark-blue text-white">
      <div className="grid grid-cols-4 gap-4">
        <div className="border border-custom p-4 rounded">
          <img
            className="mb-8"
            src="/images/ReferralSystem.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2">1. Two-Level Referral System</h3>
          <p className="text-gray-400">
            Invite friends and earn from two levels: F1 (your referrals) and F2
            (their referrals).
          </p>
        </div>
        <div className="ml-1 border border-custom p-4 rounded">
          <img
            className="mb-8"
            src="/images/Commission.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2">2. Earn Rebates & Commissions</h3>
          <p className="text-gray-400">
            Earn rebates on your trades and commissions from F1 and F2.
          </p>
        </div>
        <div className="ml-1 border border-custom p-4 rounded">
          <img
            className="mb-8"
            src="/images/Reward.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2">3. Claim Daily Rewards</h3>
          <p className="text-gray-400">
            Rewards are credited after trades close and claimable daily at 0:00
            UTC.
          </p>
        </div>
        <div className="ml-1 border border-custom p-4 rounded">
          <img
            className="mb-8"
            src="/images/Referral.svg"
            alt="Referral System"
          />
          <h3 className="font-bold mb-2">4. Referral Tier System</h3>
          <p className="text-gray-400">
            Your tier is based on total fees paid by F0, F1, and F2 over the
            last 30 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TierSystem;
