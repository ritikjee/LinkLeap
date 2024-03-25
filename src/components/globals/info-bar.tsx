"use client";
import { Input } from "@/components/ui/input";
import { Book, Headphones, Search } from "lucide-react";
import { useEffect } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
// import { useBilling } from "@/providers/billing-provider";
// import { onPaymentDetails } from "@/app/(main)/(pages)/billing/_actions/payment-connecetions";

type Props = {};

const InfoBar = (props: Props) => {
  //   const { credits, tier, setCredits, setTier } = useBilling();

  const onGetPayment = async () => {
    // const response = await onPaymentDetails();
    // if (response) {
    //   setTier(response.tier!);
    //   setCredits(response.credits!);
    // }
  };

  useEffect(() => {
    onGetPayment();
  }, []);

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300">Credits</p>
        <span>Unlimited</span>
        {/* {tier == "Unlimited" ? (
          <span>Unlimited</span>
        ) : (
          <span>
            {credits}/{tier == "Free" ? "10" : tier == "Pro" && "100"}
          </span>
        )} */}
      </span>
      <span className="flex items-center rounded-full bg-muted px-4">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent"
        />
      </span>

      <ModeToggle />
      <UserButton />
    </div>
  );
};

export default InfoBar;
