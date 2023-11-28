require('dotenv').config();

const API_URL=process.env.API_URL;
const PUBLIC_KEY=process.env.PUBLIC_KEY;
const PRIVATE_KEY=`0x${process.env.PRIVATE_KEY}`;

// create web3 instance 
const {createAlchemyWeb3}=require("@alch/alchemy-web3");
const web3=createAlchemyWeb3(API_URL);

// create contract instance and obtain contract abi
const contract= require("../artifacts/contracts/Lock.sol/MyToken.json");
const contractAddress="0x24B59750Dba273CF210EC95B7563d32608a41bc5";
const nftContract= new web3.eth.Contract(contract.abi,contractAddress);


async function mintNFT(tokenURI){
    const nonce=await web3.eth.getTransactionCount(PUBLIC_KEY,'latest');


    const tx={
        'from':PUBLIC_KEY,
        'to':contractAddress,
        'nonce':nonce,
        'gas':500000,
        'data': nftContract.methods.safeMint(PUBLIC_KEY,tokenURI).encodeABI(),
    };

    const signPromise=web3.eth.accounts.signTransaction(tx,PRIVATE_KEY);
    signPromise.then((signedtx)=>{
        web3.eth.sendSignedTransaction(signedtx.rawTransaction,function(err,hash){
            if(!err){
                console.log();
            }
            else console.log();
        });
    }).catch((err)=>{
        console.log("Promise failed:",err);
    });
}

mintNFT("https://salmon-rear-gazelle-549.mypinata.cloud/ipfs/QmaJKXWL65SmCqFqVJnr8ZztgeTVZ7PasFAkQupeXfYUvy?_gl=1*83az0j*_ga*MjAwODczNDg0Ni4xNzAxMTczMjIx*_ga_5RMPXG14TE*MTcwMTE5MzM5MC4zLjEuMTcwMTE5Mzc0NC42MC4wLjA.");