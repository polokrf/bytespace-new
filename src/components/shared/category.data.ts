import { CategoryItem } from "@/types/category.type";
import { Building2, Camera, Code2, Laptop, Megaphone, PenTool } from "lucide-react";

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'design',
    title: 'Design',
    icon: PenTool,
  },
  {
    id: 'development',
    title: 'Development',
    icon: Code2,
   
  },
  {
    id: 'it-software',
    title: 'IT & Software',
    icon: Laptop,
  },
  {
    id: 'business',
    title: 'Business',
    icon: Building2,
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: Megaphone,
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: Camera,
  },
];
