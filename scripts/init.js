
const hre = require("hardhat");
const helpers = require('@nomicfoundation/hardhat-network-helpers');
const { ethers } = require("hardhat");

async function main() {
//address that will receive the funds
  const address = "0x17639dd8fb689223CB19a80c6a9182211C8Df0d5";
  const getFunds = await helpers.setBalance(
    address,
    ethers.utils.parseEther('100000')
  );

  console.log(getFunds);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
