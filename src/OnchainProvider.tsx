import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "./wagmi";
import { WagmiProvider } from "wagmi";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "viem/chains";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function OnchainProvider({ children }: Props) {
  const queryClient = new QueryClient();
  const API_KEY = import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY;

  //   console.log(API_KEY);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={API_KEY} chain={base}>
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
