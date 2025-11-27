'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Calendar,
  User,
  CheckSquare,
  FileText,
  Table,
  FileQuestion,
  MessageSquare,
  Mail,
  FileCheck,
  BarChart3,
  Palette,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  badge?: string | number;
  subItems?: MenuItem[];
  pro?: boolean;
}

const SidebarMenuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: <Home className="w-6 h-6" />,
    subItems: [
      { label: 'eCommerce', href: '/' },
      { label: 'Analytics', href: '/analytics', pro: true },
      { label: 'Marketing', href: '/marketing', pro: true },
      { label: 'CRM', href: '/crm', pro: true },
      { label: 'Stocks', href: '/stocks', pro: true },
    ],
  },
  {
    label: 'Calendar',
    icon: <Calendar className="w-6 h-6" />,
    href: '/calendar',
  },
  {
    label: 'Profile',
    icon: <User className="w-6 h-6" />,
    href: '/profile',
  },
  {
    label: 'Tasks',
    icon: <CheckSquare className="w-6 h-6" />,
    subItems: [],
  },
  {
    label: 'Forms',
    icon: <FileText className="w-6 h-6" />,
    subItems: [],
  },
  {
    label: 'Tables',
    icon: <Table className="w-6 h-6" />,
    subItems: [],
  },
  {
    label: 'Pages',
    icon: <FileQuestion className="w-6 h-6" />,
    subItems: [],
  },
];

const SupportMenuItems: MenuItem[] = [
  {
    label: 'Messages',
    icon: <MessageSquare className="w-6 h-6" />,
    href: '/messages',
    badge: 9,
    pro: true,
  },
  {
    label: 'Inbox',
    icon: <Mail className="w-6 h-6" />,
    href: '/inbox',
    pro: true,
  },
  {
    label: 'Invoice',
    icon: <FileCheck className="w-6 h-6" />,
    href: '/invoice',
    pro: true,
  },
];

const OthersMenuItems: MenuItem[] = [
  {
    label: 'Charts',
    icon: <BarChart3 className="w-6 h-6" />,
    subItems: [],
  },
  {
    label: 'UI Elements',
    icon: <Palette className="w-6 h-6" />,
    subItems: [],
  },
  {
    label: 'Authentication',
    icon: <LogOut className="w-6 h-6" />,
    subItems: [],
  },
];

interface MenuItemProps {
  item: MenuItem;
  defaultExpanded?: boolean;
}

function MenuItem({ item, defaultExpanded = false }: MenuItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { theme } = useTheme();
  const hasSubItems = item.subItems && item.subItems.length > 0;

  if (hasSubItems) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            'w-full flex items-center justify-between px-3.5 py-3 rounded-lg transition-all duration-200',
            expanded
              ? 'bg-accent text-primary'
              : 'hover:bg-secondary text-foreground'
          )}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="font-medium text-sm">{item.label}</span>
          </div>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-200',
              expanded ? 'rotate-0' : '-rotate-90'
            )}
          />
        </button>
        {expanded && (
          <div className="ml-8 space-y-1 border-l border-border py-2">
            {item.subItems!.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.href || '#'}
                className={cn(
                  'flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200',
                  'hover:bg-secondary text-muted-foreground'
                )}
              >
                <span>{subItem.label}</span>
                {subItem.pro && (
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
                    Pro
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || '#'}
      className={cn(
        'flex items-center justify-between px-3.5 py-3 rounded-lg transition-all duration-200',
        'hover:bg-secondary text-foreground'
      )}
    >
      <div className="flex items-center gap-3">
        {item.icon}
        <span className="font-medium text-sm">{item.label}</span>
      </div>
      <div className="flex items-center gap-2">
        {item.badge !== undefined && (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-destructive/20 text-destructive text-xs font-semibold mr-2">
            {item.badge}
          </span>
        )}
        {item.pro && (
          <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
            Pro
          </span>
        )}
      </div>
    </Link>
  );
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  defaultExpandedIndex?: number;
}

function MenuSection({ title, items, defaultExpandedIndex }: MenuSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="px-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
        {title}
      </h2>
      <nav className="space-y-1">
        {items.map((item, index) => (
          <MenuItem
            key={item.label}
            item={item}
            defaultExpanded={index === defaultExpandedIndex}
          />
        ))}
      </nav>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden">
      {/* Header/Logo */}
      <div className="px-6 py-8 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">NA</span>
          </div>
          <span className="font-bold text-lg">NextAdmin</span>
        </Link>
      </div>

      {/* Scrollable Menu Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <MenuSection
          title="Main Menu"
          items={SidebarMenuItems}
          defaultExpandedIndex={0}
        />
        <MenuSection title="Support" items={SupportMenuItems} />
        <MenuSection title="Others" items={OthersMenuItems} />
      </div>
    </aside>
  );
}
