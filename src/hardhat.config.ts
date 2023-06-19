require("dotenv").config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

(async () => {
	if (process.env.IS_ZKSYNC === "true") {
		await import("@matterlabs/hardhat-zksync-verify");
	} else {
		await import("@nomiclabs/hardhat-etherscan");
	}
})();

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.17",
	},
	networks: {
		hardhat: {
			zksync: process.env.IS_ZKSYNC === "true", // enables zksync in hardhat local network
		},

		goerli: {
			url: process.env.GOERLI_RPC as string, // URL of the Ethereum Web3 RPC (optional)
		},
		"base-testnet": {
			url: "https://goerli.base.org",
			accounts: [process.env.WALLET_KEY as string],
		},
		"scroll-testnet": {
			url: "https://alpha-rpc.scroll.io/l2",
			accounts: [process.env.WALLET_KEY as string],
		},
		"taiko-testnet": {
			url: "https://rpc.test.taiko.xyz",
			accounts: [process.env.WALLET_KEY as string],
		},
		"linea-testnet": {
			url: "https://rpc.goerli.linea.build",
			accounts: [process.env.WALLET_KEY as string],
		},
		"zksync-testnet": {
			url: "https://testnet.era.zksync.dev",
			ethNetwork: process.env.GOERLI_RPC as string, // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
			zksync: true,
			verifyURL:
				"https://zksync2-testnet-explorer.zksync.dev/contract_verification",
		},
	},
	etherscan: {
		apiKey: {
			// Basescan doesn't require an API key, however
			// Hardhat still expects an arbitrary string to be provided.
			"base-testnet": "PLACEHOLDER_STRING",
			"scroll-testnet": "PLACEHOLDER_STRING",
			"taiko-testnet": "PLACEHOLDER_STRING",
			"linea-testnet": process.env.ETHERSCAN_API_KEY as string,
			// "zksync-testnet": process.env.ETHERSCAN_API_KEY as string,
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
			{
				network: "linea-testnet",
				chainId: 59140,
				urls: {
					apiURL: "https://explorer.goerli.linea.build/api",
					browserURL: "https://explorer.goerli.linea.build/",
				},
			},
		],
	},
	zksolc: {
		version: "1.3.8",
		compilerSource: "binary",
		settings: {},
	},
	defaultNetwork: "hardhat",
};

export default config;
