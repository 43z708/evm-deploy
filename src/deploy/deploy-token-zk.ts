import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

require("dotenv").config();

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
	console.log(`Running deploy script for the Token contract`);

	// Initialize the wallet.
	const wallet = new Wallet(process.env.WALLET_KEY as string);

	// Create deployer object and load the artifact of the contract you want to deploy.
	const deployer = new Deployer(hre, wallet);
	const artifact = await deployer.loadArtifact("Token");

	// Estimate contract deployment fee
	const deploymentFee = await deployer.estimateDeployFee(artifact, []);

	// OPTIONAL: Deposit funds to L2
	// Comment this block if you already have funds on zkSync.
	const depositHandle = await deployer.zkWallet.deposit({
		to: deployer.zkWallet.address,
		token: utils.ETH_ADDRESS,
		amount: deploymentFee.mul(2),
	});
	// Wait until the deposit is processed on zkSync
	await depositHandle.wait();

	// Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
	const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
	console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

	const contract = await deployer.deploy(artifact, []);

	//obtain the Constructor Arguments
	console.log("constructor args:" + contract.interface.encodeDeploy());

	// Show the contract info.
	const contractAddress = contract.address;
	console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
