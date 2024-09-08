import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
} from "@coinbase/onchainkit/swap";
import {
  Wallet,
  ConnectWallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import { type Token } from "@coinbase/onchainkit/token";
import { Flex, VStack } from "@chakra-ui/react";
import { setOnchainKitConfig } from "@coinbase/onchainkit";
// import { getTokens } from "@coinbase/onchainkit/api";
// import { useCallback, useEffect, useState } from "react";

export default function SwapComponents() {
  const API_KEY = import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY;

  //   const [tokenSelect, setTokensSelect] = useState<Token[]>([]);
  const { address } = useAccount();
  setOnchainKitConfig({ apiKey: API_KEY });

  //   const handleGetTokens = async () => {
  //     const tokens = await getTokens();
  //     console.log(tokens);
  //   };

  //   useEffect(() => {
  //     const fetchTokens = async () => {
  //       const tokens = await getTokens();
  //       if ("error" in tokens) {
  //         console.error(tokens.error); // Handle the error appropriately
  //         return; // Exit if there's an error
  //       }
  //       setTokensSelect(tokens); // Assuming you want to set the first token
  //     };

  //     fetchTokens();
  //   }, []);

  //   const handleChange = useCallback((value: string) => {
  //     const getData = async (value: string) => {
  //       const response = await getTokens({ search: value });
  //       if ("error" in response) {
  //         console.error(response.error); // Handle the error appropriately
  //         return;
  //       }
  //       const tokens: Token[] = response; // Ensure response is of type Token[]
  //       setTokensSelect(tokens);
  //     };
  //     getData(value);
  //   }, []);

  //   --------this mappes list of token to be swappable-----------

  //   const swappableTokens: Token[] =
  //     tokenSelect.length > 0
  //       ? tokenSelect.map((token) => ({
  //           name: token.name,
  //           address: token.address,
  //           symbol: token.symbol,
  //           decimals: token.decimals,
  //           image: token.image,
  //           chainId: token.chainId,
  //         }))
  //       : [
  //           {
  //             name: "Ethereum",
  //             address: "",
  //             symbol: "ETH",
  //             decimals: 18,
  //             image:
  //               "https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png",
  //             chainId: 8453,
  //           },
  //         ];

  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image:
      "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
  };

  const USDCToken: Token = {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC",
    symbol: "USDC",
    image:
      "https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png",
  };

  // add other tokens here to display them as options in the swap
  const swappableTokens: Token[] = [ETHToken, USDCToken];

  return address ? (
    <VStack align="left">
      <Flex align="center" justify="space-between">
        <Wallet>
          <ConnectWallet>
            <Avatar className="w-5 w-full" />
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <Identity hasCopyAddressOnClick>
              <Avatar />
              <Name />
              <Address />
              <EthBalance />
            </Identity>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </Flex>
      <Swap>
        <SwapAmountInput
          label="Sell"
          swappableTokens={swappableTokens}
          type="from"
        />
        <SwapToggleButton />
        <SwapAmountInput
          label="Buy"
          swappableTokens={swappableTokens}
          type="to"
        />
        <SwapButton />
        <SwapMessage />
      </Swap>
    </VStack>
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
    </Wallet>
  );
}
