"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  Bell,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onToggleSidebar?: () => void;
}

export function Header({
  title = "Dashboard",
  subtitle = "SaaS Admin Dashboard Solution",
  onToggleSidebar,
}: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const notifications = [
    { id: 1, message: "New message from John", time: "5 minutes ago" },
    { id: 2, message: "Your report is ready", time: "1 hour ago" },
    { id: 3, message: "System update completed", time: "2 hours ago" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-background">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Toggle Sidebar Button */}
          <button
            onClick={onToggleSidebar}
            className="flex md:flex items-center gap-2 rounded-lg border border-border bg-transparent px-2 py-1.5 text-foreground transition-colors hover:bg-secondary"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </button>

          {/* Title Section */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-sm font-medium text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div
            className={cn(
              "flex items-center gap-3 rounded-full border bg-secondary px-5 py-3 transition-all duration-200",
              searchFocused
                ? "border-primary bg-background shadow-sm"
                : "border-border bg-secondary",
            )}
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-64 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center rounded-full bg-secondary p-2.5 transition-colors hover:bg-accent"
            aria-label="Toggle dark mode"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted ? (
              <>
                {theme === "light" ? (
                  <Sun className="h-5 w-5 text-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground" />
                )}
              </>
            ) : (
              <Sun className="h-5 w-5 text-foreground" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-accent"
              aria-label="Notifications"
              aria-expanded={notificationsOpen}
              aria-haspopup="menu"
            >
              <Bell className="h-5 w-5 text-foreground" />
              <span className="absolute right-0 top-0 flex h-2 w-2 items-center justify-center rounded-full bg-destructive">
                <span className="h-2 w-2 animate-ping rounded-full bg-destructive opacity-75" />
              </span>
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-lg border border-border bg-card shadow-lg">
                <div className="border-b border-border px-4 py-3">
                  <h3 className="font-semibold text-foreground">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="border-b border-border px-4 py-3 hover:bg-secondary"
                    >
                      <p className="text-sm text-foreground">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border px-4 py-2">
                  <button className="w-full text-center text-sm text-primary hover:opacity-80">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Account Menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-3 rounded-md transition-colors hover:bg-secondary"
              aria-expanded={userMenuOpen}
              aria-haspopup="menu"
            >
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">
                  John Smith
                </p>
              </div>
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="User avatar"
                className="h-12 w-12 rounded-md"
              />
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-foreground transition-transform",
                  userMenuOpen && "rotate-180",
                )}
              />
            </button>

            {/* User Menu Dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">
                    John Smith
                  </p>
                  <p className="text-xs text-muted-foreground">
                    john@example.com
                  </p>
                </div>
                <nav className="py-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Account
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Preferences
                  </button>
                </nav>
                <div className="border-t border-border px-4 py-2">
                  <button className="w-full flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-destructive/10">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
