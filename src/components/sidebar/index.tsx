"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/contants";

type Props = {};

function MenuOptions({}: Props) {
  const pathName = usePathname();

  return (
    <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link className="flex font-bold flex-row " href="/">
          horizon.
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer",
                        {
                          "dark:bg-[#2F006B] bg-[#EEE0FF] ":
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  );
}

export default MenuOptions;
