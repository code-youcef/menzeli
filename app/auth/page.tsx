"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/auth";
import Header from "@/components/shared/header";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function AuthPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(119); // 1:59
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, verifyOtp, updateName, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (user && user.name) {
    router.push("/");
  }

  const handleSendOTP = async () => {
    if (phoneNumber.length >= 9) {
      setLoading(true);
      setError("");
      try {
        await login(phoneNumber);
        setStep(2);
        setTimer(119);
      } catch (err) {
        setError("Failed to send OTP. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      setLoading(true);
      setError("");
      try {
        const response = await verifyOtp(phoneNumber, otpCode);
        if (!response.data?.fillName) {
          setStep(3);
        } else {
          router.push("/");
        }
      } catch (err) {
        setError("Invalid OTP. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdateName = async () => {
    if (name.trim().length > 2) {
      setLoading(true);
      setError("");
      try {
        await updateName(name);
        // router.push("/") is handled inside updateName or we can do it here if updateName was changed
      } catch (err) {
        setError("Failed to update name. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChangeNumber = () => {
    setStep(1);
    setOtp(["", "", "", "", "", ""]);
    setError("");
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <Header page="auth" step={step} />

      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Step 1 Background Illustrations */}
        {step === 1 && (
          <>
            <Image
              src="/images/mmb9j5ki-hhhwr5q.svg"
              alt="Decoration"
              width={133}
              height={167}
              className="absolute top-20 right-0 pointer-events-none"
            />
            <Image
              src="/images/mmb9j5ki-i5332ko.svg"
              alt="Decoration"
              width={200}
              height={225}
              className="absolute bottom-0 left-0 pointer-events-none"
            />
          </>
        )}

        <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-xl p-8 sm:p-12 z-10">
          {step === 1 ? (
            /* Step 1: Phone Entry */
            <div className="flex flex-col items-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <Image
                  src="/images/mmb9j5ki-1t7umbv.svg"
                  alt="Phone"
                  width={20}
                  height={28}
                  className="text-blue-600"
                />
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Welcome to Menzeli</h1>
              <p className="text-slate-500 text-center mb-10">Verify your phone number to find your next home</p>

              {error && (
                <div className="mb-4 w-full rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 text-center">
                  {error}
                </div>
              )}

              <div className="w-full space-y-4">
                <div className="flex gap-3">
                  <div className="w-1/3">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Country</label>
                    <div className="relative flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-4 w-5 overflow-hidden rounded-sm bg-slate-200 relative">
                           {/* Algeria Flag Approximation */}
                           <div className="absolute inset-y-0 left-0 w-1/3 bg-green-700"></div>
                           <div className="absolute inset-y-0 right-0 w-1/3 bg-white"></div> {/* Middle is white */}
                           <div className="absolute inset-y-0 right-0 w-1/3 bg-red-600 hidden"></div> {/* Wait, simplified flag */}
                           {/* Using a simple div representation based on code provided */}
                           <div className="h-full w-full flex">
                             <div className="h-full w-1/2 bg-[#006233]"></div>
                             <div className="h-full w-1/2 bg-white relative">
                                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[8px] text-[#D21034]">★</div>
                             </div>
                           </div>
                        </div>
                        <span className="font-semibold text-slate-900">+213</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="5xx xx xx xx"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSendOTP}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send OTP Code"}
                  {!loading && <Image src="/images/mmb9j5kj-q4w834g.svg" alt="Arrow" width={14} height={14} />}
                </button>
              </div>

              <div className="relative my-8 w-full text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <span className="relative bg-white px-4 text-sm font-medium text-slate-400">Or continue with</span>
              </div>

              <div className="flex w-full gap-4">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 hover:bg-slate-50 transition-colors">
                  <Image src="/images/mmb9j5ks-dmt14nq.png" alt="Google" width={20} height={20} />
                  <span className="text-sm font-bold text-slate-700">Google</span>
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 hover:bg-slate-50 transition-colors">
                  <Image src="/images/mmb9j5kj-yxy9lvi.svg" alt="Email" width={18} height={14} />
                  <span className="text-sm font-bold text-slate-700">Email</span>
                </button>
              </div>

              <div className="mt-10 text-center text-xs text-slate-500">
                <p>
                  By continuing, you agree to Menzeli's <Link href="#" className="font-semibold text-blue-600 hover:underline">Terms of Service</Link> and
                </p>
                <div className="flex justify-center gap-1 mt-1">
                   <Link href="#" className="font-semibold text-blue-600 hover:underline">Privacy Policy</Link>.
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            /* Step 2: OTP Verification */
            <div className="flex flex-col items-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <Image
                  src="/images/mmb9j5lh-777z4l5.svg"
                  alt="Envelope"
                  width={26}
                  height={23}
                  className="text-blue-600"
                />
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Verify Your Number</h1>
              <p className="text-slate-500 text-center mb-8">
                Enter the 6-digit verification code sent to <br />
                <span className="font-bold text-slate-900">+213 {phoneNumber}</span>
              </p>

              {error && (
                <div className="mb-4 w-full rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 text-center">
                  {error}
                </div>
              )}

              <div className="w-full space-y-8">
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="h-14 w-12 rounded-lg border-2 border-slate-200 text-center text-xl font-bold text-slate-900 focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  ))}
                </div>

                <button
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.join("").length !== 6}
                  className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Verifying..." : "Verify & Login"}
                </button>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="rounded-lg bg-slate-50 px-4 py-2 font-bold text-slate-900 border border-slate-100">
                      {formatTime(timer)}
                    </div>
                    <button 
                      className="font-bold text-slate-400 hover:text-slate-600 disabled:opacity-50"
                      disabled={timer > 0}
                      onClick={() => setTimer(119)}
                    >
                      Resend Code
                    </button>
                  </div>
                  <p className="text-xs text-slate-400">Wait for the timer to request a new code</p>
                </div>

                <button 
                  onClick={handleChangeNumber}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 mt-4"
                >
                  <Image src="/images/mmb9j5lh-f8ajbrt.svg" alt="Back" width={10} height={10} />
                  Change phone number
                </button>
              </div>
            </div>
          ) : (
            /* Step 3: Complete Profile */
            <div className="flex flex-col items-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <Image
                  src="/images/mmb9j5lh-777z4l5.svg"
                  alt="Profile"
                  width={26}
                  height={23}
                  className="text-blue-600"
                />
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Complete Profile</h1>
              <p className="text-slate-500 text-center mb-8">
                Please enter your full name to continue
              </p>

              {error && (
                <div className="mb-4 w-full rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 text-center">
                  {error}
                </div>
              )}

              <div className="w-full space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={handleUpdateName}
                  disabled={loading || name.trim().length < 3}
                  className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Updating..." : "Complete Profile"}
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Step 2 style mostly */}
        <div className="mt-12 w-full max-w-4xl border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
           <p>© 2024 Menzeli Real Estate. All rights reserved.</p>
           <div className="flex gap-6">
             <Link href="#" className="hover:text-slate-600">Privacy Policy</Link>
             <Link href="#" className="hover:text-slate-600">Terms of Service</Link>
             <Link href="#" className="hover:text-slate-600">Contact Support</Link>
           </div>
        </div>
      </main>
    </div>
  );
}
