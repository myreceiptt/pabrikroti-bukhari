// /src/components/fts/CoinLister.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Chain } from "thirdweb";
import { TokenProvider, TokenIcon } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import {
  coinButton,
  coinClaimed,
  coinListerImage,
  coinListerName,
  coinNoAccess,
  coinOf,
  coinSupply,
  colorBorder,
  colorIcon,
  colorPrimary,
  colorSecondary,
  loaderChecking,
  nftClosed,
  nftInsufficient,
  nftSoon,
} from "@/config/myreceipt";
import { getCountdownString } from "@/config/utils";

// Components libraries
import Loader from "@/components/sections/ReusableLoader";

type CoinListerProps = {
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
  adjustedPrice: number;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  adjustedSupply: number;
  adjustedMaxClaim: number;
  adjustedBalance: number;
  hasAccess: boolean | null;
  refreshToken: number;
};

const CoinLister: React.FC<CoinListerProps> = ({
  coinAddress,
  coinChain,
  coinName,
  adjustedPrice,
  startTimestamp,
  isClaimable,
  reason,
  adjustedSupply,
  adjustedMaxClaim,
  adjustedBalance,
  hasAccess,
  refreshToken,
}) => {
  const router = useRouter();
  const startTime = new Date(Number(startTimestamp) * 1000);

  // Ensure state variables are properly declared
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hasError, setHasError] = useState(false);

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Determine button status
  let buttonLabel = coinButton;
  let buttonDisabled = false;

  if (hasAccess === null || hasAccess === false) {
    buttonLabel = coinNoAccess;
    buttonDisabled = true;
  } else {
    if (currentTime < startTime) {
      // Belum waktunya
      buttonLabel = `${nftSoon} ${getCountdownString(startTime, currentTime)}`;
      buttonDisabled = true;
    } else if (adjustedBalance < adjustedPrice) {
      // Tidak cukup saldo
      buttonLabel = nftInsufficient;
      buttonDisabled = true;
    } else if (!isClaimable) {
      // Tidak bisa diklaim karena alasan lain
      const safeReason = (reason ?? "").toLowerCase();
      if (safeReason.includes("dropclaimexceedlimit")) {
        buttonLabel = coinClaimed;
      } else if (safeReason.includes("dropclaimexceedmaxsupply")) {
        buttonLabel = nftClosed;
      } else {
        buttonLabel = nftClosed; // fallback
      }
      buttonDisabled = true;
    }
  }

  // Format the supply, max. claim, owned, and per wallet
  function formatNumberCompact(value: number): string {
    const round = (val: number) =>
      val % 1 === 0 ? val.toFixed(0) : val.toFixed(2);

    if (value >= 1_000_000_000) {
      return `${round(value / 1_000_000_000)}B`;
    } else if (value >= 1_000_000) {
      return `${round(value / 1_000_000)}M`;
    } else if (value >= 1_000) {
      return `${round(value / 1_000)}K`;
    } else {
      return value.toString();
    }
  }

  return (
    <div
      style={{ borderColor: colorBorder }}
      className="w-full grid grid-cols-1 gap-4 p-4 border rounded-3xl">
      {hasAccess === null ? (
        <Loader message={loaderChecking} />
      ) : (
        <>
          <Link href={`/address/${coinAddress}`}>
            <TokenProvider
              key={refreshToken}
              address={coinAddress}
              client={client}
              chain={coinChain}>
              {!hasError ? (
                <TokenIcon
                  alt={coinName}
                  className="rounded-2xl w-full"
                  onError={() => setHasError(true)}
                />
              ) : (
                <Image
                  src={coinListerImage}
                  alt={coinName ?? coinListerName}
                  width={755}
                  height={545}
                  className="rounded-2xl w-full"
                />
              )}
            </TokenProvider>
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <h2
              style={{ color: colorSecondary }}
              className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold">
              {coinName}
            </h2>
            <div
              style={{ color: colorIcon }}
              className="flex items-center gap-2 text-sm sm:text-xs lg:text-sm font-medium">
              <span>{coinSupply}</span>
              <span title={`${adjustedSupply} ${coinOf} ${adjustedMaxClaim}`}>
                {formatNumberCompact(adjustedSupply)}/
                {formatNumberCompact(adjustedMaxClaim)}
              </span>
            </div>
          </div>

          <button
            title={buttonLabel}
            disabled={buttonDisabled}
            onClick={() => {
              if (!buttonDisabled) {
                router.push(`/address/${coinAddress}`);
              }
            }}
            style={{
              color: buttonDisabled ? colorSecondary : colorPrimary,
              backgroundColor: buttonDisabled ? "transparent" : colorSecondary,
              border: "2px solid",
              borderColor: buttonDisabled ? colorBorder : colorSecondary,
            }}
            className={`w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all ${
              !buttonDisabled ? "cursor-pointer" : ""
            }`}>
            {buttonLabel}
          </button>
        </>
      )}
    </div>
  );
};

export default CoinLister;
