"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/components/providers/auth";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import {useEffect} from 'react';

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
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  useEffect(() =>{
    console.log({dict: i18n.t('header.browse')})
  },[i18n]) 

  const handleLanguageChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      if (
        newLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
      ) {
        const newPath = currentPathname.replace(`/${currentLocale}`, '');
        router.push(newPath || '/');
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }
    }

    router.refresh();
  };

  if (page === "dashboard") {
    return null;
  }

  // Auth Page Header
  // if (page === "auth") {
  //   // We need to narrow the type to access 'step'
  //   const step = "step" in props ? props.step : 1;
    
  //   return (
  //     <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
  //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center gap-2">
  //           <Link href="/" className="flex items-center gap-2">
  //             <Image
  //               src={step === 1 ? "/images/mmb9j5ki-fef1vht.svg" : "/images/mmb9j5lh-4pas8mg.svg"}
  //               alt="Menzeli Logo"
  //               width={32}
  //               height={32}
  //               className="h-8 w-8"
  //             />
  //             <span className="text-xl font-extrabold text-slate-900 tracking-tight">Menzeli</span>
  //           </Link>
  //         </div>

  //         {step === 1 ? (
  //           <div className="flex items-center gap-8">
  //             <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
  //               <Link href="#" className="hover:text-blue-600 transition-colors">Buy</Link>
  //               <Link href="#" className="hover:text-blue-600 transition-colors">Rent</Link>
  //               <Link href="#" className="hover:text-blue-600 transition-colors">New Projects</Link>
  //               <Link href="#" className="hover:text-blue-600 transition-colors">Sell</Link>
  //             </nav>
  //             <div className="hidden md:block h-6 w-px bg-slate-200"></div>
  //             <Link href="#" className="text-sm font-bold text-slate-900 hover:text-blue-600">Help</Link>
  //           </div>
  //         ) : (
  //           <div>
  //             <Link href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg">Help Center</Link>
  //           </div>
  //         )}
  //       </div>
  //     </header>
  //   );
  // }

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
            <Link href={`/${currentLocale}/listings`} className="hover:text-blue-600 transition-colors">{i18n.t('common:header.browse')}</Link>
            <Link href={`/${currentLocale}/about`} className="hover:text-blue-600 transition-colors">{i18n.t('common:header.about')}</Link>
            <Link href={`/${currentLocale}/contact`} className="hover:text-blue-600 transition-colors">{i18n.t('common:header.contact')}</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:block rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
          >
            {i18n.t('common:header.list_property')}
          </Link>

          <div className="hidden lg:flex items-center rounded-full border border-zinc-200 bg-zinc-50 p-1 text-xs font-medium">
            <button 
              onClick={() => handleLanguageChange('en')}
              className={`rounded-full px-3 py-1 shadow-sm transition-colors ${currentLocale === 'en' ? 'bg-white text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              EN
            </button>
            <button 
              onClick={() => handleLanguageChange('fr')}
              className={`rounded-full px-3 py-1 shadow-sm transition-colors ${currentLocale === 'fr' ? 'bg-white text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              FR
            </button>
            <button 
              onClick={() => handleLanguageChange('ar')}
              className={`rounded-full px-3 py-1 shadow-sm transition-colors ${currentLocale === 'ar' ? 'bg-white text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              AR
            </button>
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
                {i18n.t('common:header.logout')}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/auth" className="text-sm font-semibold text-zinc-900 hover:text-blue-600">
                {i18n.t('common:header.login')}
              </Link>
              <Link
                href="/auth"
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                {i18n.t('common:header.signup')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
