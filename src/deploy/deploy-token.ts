import { ethers } from "hardhat";

async function main() {
	const TOKEN = await ethers.getContractFactory("Token");
	const token = await TOKEN.deploy();

	await token.deployed();

	console.log("Token Contract Deployed at " + token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
