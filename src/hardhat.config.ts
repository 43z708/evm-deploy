import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

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
	defaultNetwork: "hardhat",
};

export default config;
