import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { BiImages, BiComment, BiCog, BiPaint, BiHistory } from "react-icons/bi";
import { BsColumnsGap } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";

const Settings = ({ children }: React.PropsWithChildren<{}>) => {
  const router = useRouter();

  const settingsPages = [
    { icon: BiPaint, name: "Appearance", href: "/settings/appearance" },
    { icon: BsColumnsGap, name: "Layout", href: "/settings/layout" },
    { icon: BiImages, name: "Media", href: "/settings/media" },
    { icon: BiComment, name: "Comments", href: "/settings/comments" },
    { icon: FiFilter, name: "Filters", href: "/settings/filters" },
    { icon: BiCog, name: "Behavior", href: "/settings/behavior" },
    { icon: BiHistory, name: "History", href: "/settings/history" },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="flex flex-col border rounded-lg overflow-y-auto py-4 w-full sm:w-44 px-0 pb-0 flex-none sm:mr-4 overflow-hidden border-r-0 sm:border-r rounded-r-none sm:rounded-r-lg bg-th-post border-th-border2 shadow-md scrollbar-thin scrollbar-thumb-th-scrollbar scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full bg-th-post border-th-border2">
          {settingsPages.map(({ icon: Icon, name, href }) => (
            <Link
              key={href}
              href={href}
              className={classNames("opacity-50 hover:opacity-80 flex my-1", {
                "font-bold opacity-100 bg-th-highlight":
                  router.pathname === href,
              })}
            >
              <div className="w-1 h-12 mt-0 mr-2 bg-th-scrollbar "></div>
              <div className="flex items-center justify-start py-2 pl-1">
                <span>
                  <Icon className="size-6 flex-none mr-2" />
                </span>
                <span className="w-full">{name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-96">{children}</div>
      </div>
    </div>
  );
};

export default Settings;
