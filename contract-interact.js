Web3 = require('web3')
const { Console } = require('console');
const fs = require('fs');

const web3 = new Web3("https://polygon-rpc.com")
const contractAddress = "0x4AB071C42C28c4858C4BAc171F06b13586b20F30"
const contractJson = fs.readFileSync('./abi.json')
const abi = JSON.parse(contractJson)
const mSandMaticContract = new web3.eth.Contract(abi, contractAddress)

const contractAddressQuickSwapRouter = "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"
const contractQuickSwapRouterJson = fs.readFileSync('./abiQuickSwapRouter.json')
const abiQuickSwapRouter = JSON.parse(contractQuickSwapRouterJson)
const quickSwapRouterContract = new web3.eth.Contract(abiQuickSwapRouter, contractAddressQuickSwapRouter)

const contractAddressSandMaticPool = "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683"
const contractSandMaticPoolJson = fs.readFileSync('./abiSandPolygon.json')
const abiSandMaticPool = JSON.parse(contractSandMaticPoolJson)
const sandMaticPoolContract = new web3.eth.Contract(abiSandMaticPool, contractAddressSandMaticPool)



asyncCall()

async function asyncCall() {
    var accounts = web3.eth.getAccounts()
    console.log(accounts[0])
    //const rewardAmount = await mSandMaticContract.methods.rewards("0x560CC2be59c5deF53431783C3583B8f9F63b7793").call()
    //console.log(rewardAmount)
    //await mSandMaticContract.methods.getReward().send({ from: '0x560CC2be59c5deF53431783C3583B8f9F63b7793' })
    //console.log(await quickSwapRouterContract.methods.quote(1, 1, 1).call())
    //console.log(await sandMaticPoolContract.methods.isSuperOperator('0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff').call())
}