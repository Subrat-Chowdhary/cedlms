"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex rounded-2xl items-center gap-x-2 text-white text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-green-700",
        isActive && "text-black bg-white hover:bg-green-600 hover:text-white"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-white",
            isActive && "text-black hover:text-white"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-4 rounded-2xl border-black h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}