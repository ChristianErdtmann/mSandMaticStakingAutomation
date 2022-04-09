Web3 = require('web3')
const fs = require('fs');

const web3 = new Web3("https://polygon-rpc.com")
const contractAddress = "0x4AB071C42C28c4858C4BAc171F06b13586b20F30"
const contractJson = fs.readFileSync('./abi.json')
const abi = JSON.parse(contractJson)
const mSandMaticContract = new web3.eth.Contract(abi, contractAddress)

mSandMaticContract.balanceOf(0x7e5475290Df8E66234A541483453B5503551C780)
