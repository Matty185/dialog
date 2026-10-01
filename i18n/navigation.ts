import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware replacements for next/link and next/navigation.
// Pass internal (Polish) pathnames; they are localized automatically.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
