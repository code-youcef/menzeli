"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/providers/auth";

type HeaderProps =
  | {
      page: "auth";
      step: 1 | 2 | 3;
    }
  | { page: "dashboard" }
  | { page?: "home" };

export default function Header(props: HeaderProps) {
  const { page = "home" } = props;
  const { user, logout } = useAuth();

  if (page === "dashboard") {
    return null;
  }

  // Auth Page Header
  if (page === "auth") {
    // We need to narrow the type to access 'step'
    const step = "step" in props ? props.step : 1;
    
    return (
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={step === 1 ? "/images/mmb9j5ki-fef1vht.svg" : "/images/mmb9j5lh-4pas8mg.svg"}
                alt="Menzeli Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">Menzeli</span>
            </Link>
          </div>

          {step === 1 ? (
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                <Link href="#" className="hover:text-blue-600 transition-colors">Buy</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Rent</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">New Projects</Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">Sell</Link>
              </nav>
              <div className="hidden md:block h-6 w-px bg-slate-200"></div>
              <Link href="#" className="text-sm font-bold text-slate-900 hover:text-blue-600">Help</Link>
            </div>
          ) : (
            <div>
              <Link href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg">Help Center</Link>
            </div>
          )}
        </div>
      </header>
    );
  }

  // Home / Landing Page Header
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/images/mmb9j5lh-4pas8mg.svg"}
                alt="Menzeli Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">Menzeli</span>
            </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
            <Link href="#" className="hover:text-blue-600 transition-colors">Browse</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:block rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
          >
            List your Property
          </Link>

          <div className="hidden lg:flex items-center rounded-full border border-zinc-200 bg-zinc-50 p-1 text-xs font-medium">
            <button className="rounded-full bg-white px-3 py-1 shadow-sm text-zinc-900">EN</button>
            <button className="px-3 py-1 text-zinc-500 hover:text-zinc-900">FR</button>
            <button className="px-3 py-1 text-zinc-500 hover:text-zinc-900">AR</button>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-zinc-900">
                {user.name || user.phone}
              </span>
              <button
                onClick={logout}
                className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/auth" className="text-sm font-semibold text-zinc-900 hover:text-blue-600">
                Login
              </Link>
              <Link
                href="/auth"
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
