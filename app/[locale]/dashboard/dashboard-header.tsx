"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import UserDropdown from "@/components/shared/user-dropdown";
import { NotificationsDropdown } from "@/components/shared/notifications-dropdown";
import { useAuth } from "@/components/providers/auth";

export function DashboardHeader() {
  const { t } = useTranslation("dashboard");
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 shadow-sm">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            placeholder={t("header.search")}
            className="h-10 border-0 bg-zinc-50 pl-10 focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          <Link href="#" className="hover:text-zinc-900">{t("header.properties")}</Link>
          {/* <Link href="#" className="hover:text-zinc-900">{t("header.agencies")}</Link> */}
          <Link href="#" className="hover:text-zinc-900">{t("header.pricing")}</Link>
        </nav>
        <div className="h-4 w-px bg-zinc-200" />
        <div className="flex items-center gap-2">
          <NotificationsDropdown />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
