"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type NotificationType = "message" | "listing_approved" | "listing_rejected";

interface Notification {
  id: string;
  type: NotificationType;
  read: boolean;
  timestamp: Date;
  data: {
    user?: string;
    listing?: string;
  };
}

export function NotificationsDropdown() {
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.language === "ar";

  // Demo data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "message",
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
      data: { user: "Ahmed Benali" },
    },
    {
      id: "2",
      type: "listing_approved",
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      data: { listing: "Villa in Hydra" },
    },
    {
      id: "3",
      type: "listing_rejected",
      read: true,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      data: { listing: "Studio in Oran" },
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    // @ts-ignore
    if (diffInSeconds < 60) return t("notifications.time.just_now");
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    // @ts-ignore
    if (diffInMinutes < 60) return t("notifications.time.min_ago", { count: diffInMinutes });

    const diffInHours = Math.floor(diffInMinutes / 60);
    // @ts-ignore
    if (diffInHours < 24) return t("notifications.time.hour_ago", { count: diffInHours });

    const diffInDays = Math.floor(diffInHours / 24);
    // @ts-ignore
    return t("notifications.time.day_ago", { count: diffInDays });
  };

  const getNotificationText = (notification: Notification) => {
    switch (notification.type) {
      case "message":
        // @ts-ignore
        return t("notifications.new_message", { user: notification.data.user });
      case "listing_approved":
        // @ts-ignore
        return t("notifications.listing_approved", { listing: notification.data.listing });
      case "listing_rejected":
        // @ts-ignore
        return t("notifications.listing_rejected", { listing: notification.data.listing });
      default:
        return "";
    }
  };

  return (
    <DropdownMenu dir={isRtl ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zinc-600" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
          )}
          {/* @ts-ignore */}
          <span className="sr-only">{t("notifications.title")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          {/* @ts-ignore */}
          <h2 className="font-semibold text-sm">{t("notifications.title")}</h2>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              onClick={markAllAsRead}
            >
              {/* @ts-ignore */}
              {t("notifications.mark_all_read")}
            </Button>
          )}
        </div>
        <ScrollArea className="h-75">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-sm text-zinc-500">
              {/* @ts-ignore */}
              {t("notifications.empty")}
            </div>
          ) : (
            <div className="flex flex-col">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "flex flex-col gap-1 p-4 border-b last:border-0 hover:bg-zinc-50 transition-colors cursor-pointer relative",
                    !notification.read && "bg-blue-50/50"
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className={cn("text-sm leading-snug", !notification.read && "font-medium")}>
                      {getNotificationText(notification)}
                    </p>
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    )}
                  </div>
                  <span className="text-xs text-zinc-500">
                    {/* @ts-ignore */}
                    {getTimeAgo(notification.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
