import {
  UserCircleIcon,
  HeartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";

export interface NavItem {
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

export interface SectionConfig {
  id: string;
  Component: ComponentType;
  navItem?: NavItem;
}

// lazy imports to avoid circular deps
import Banner from "../components/banner";
import Couple from "../components/couple";
import Story from "../components/story";
import Entourage from "../components/entourage";

export const SECTIONS: SectionConfig[] = [
  {
    id: "banner",
    Component: Banner,
  },
  {
    id: "couple",
    Component: Couple,
    navItem: { label: "The Couple",      Icon: UserCircleIcon },
  },
  {
    id: "story",
    Component: Story,
    navItem: { label: "Our Story",       Icon: HeartIcon },
  },
  {
    id: "entourage",
    Component: Entourage,
    navItem: { label: "The Entourage",   Icon: UserGroupIcon },
  },
];

export const NAV_SECTIONS = SECTIONS.filter((s) => s.navItem);
export const SECTION_IDS  = SECTIONS.map((s) => s.id);