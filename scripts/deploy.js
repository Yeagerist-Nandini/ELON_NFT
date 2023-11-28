
const hre = require("hardhat");

async function main() {
  const MyToken=await ethers.getContractFactory("MyToken");

  const tokenAddress="0xd7A43c5b7fb296134B43B41d09cA86b338a96C46";
  const myToken = await MyToken.deploy(tokenAddress); // Instance of the contract
  console.log("Contract address:",myToken.address);
}

main()
.then(()=>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
