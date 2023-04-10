import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

require("dotenv").config();

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.17",
	},
	networks: {
		// for testnet
		"base-testnet": {
			url: "https://goerli.base.org",
			accounts: [process.env.WALLET_KEY as string],
		},
		// for testnet
		"scroll-testnet": {
			url: "https://alpha-rpc.scroll.io/l2",
			accounts: [process.env.WALLET_KEY as string],
		},
		// for testnet
		"taiko-testnet": {
			url: "https://rpc.a2.taiko.xyz",
			accounts: [process.env.WALLET_KEY as string],
		},
	},
	etherscan: {
		apiKey: {
			// Basescan doesn't require an API key, however
			// Hardhat still expects an arbitrary string to be provided.
			"base-testnet": "PLACEHOLDER_STRING",
			"scroll-testnet": "PLACEHOLDER_STRING",
			"taiko-testnet": "PLACEHOLDER_STRING",
		},
		customChains: [
			{
				network: "base-testnet",
				chainId: 84531,
				urls: {
					apiURL: "https://api-goerli.basescan.org/api",
					browserURL: "https://goerli.basescan.org",
				},
			},
			{
				network: "scroll-testnet",
				chainId: 534353,
				urls: {
					apiURL: "https://blockscout.scroll.io/api",
					browserURL: "https://blockscout.scroll.io",
				},
			},
			{
				network: "taiko-testnet",
				chainId: 167004,
				urls: {
					apiURL: "https://explorer.a2.taiko.xyz/api",
					browserURL: "https://explorer.a2.taiko.xyz",
				},
			},
		],
	},
	defaultNetwork: "hardhat",
};

export default config;
