"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Primary Education": FcMusic,
  "Entrepreneurship Development": FcSalesPerformance,
  "Art & Craft": FcOldTimeCamera,
  "Travel & Tourism": FcSalesPerformance,
  "Corporate Training": FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  "Agriculture": FcFilmReel,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 flex-wrap gap-6 pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}