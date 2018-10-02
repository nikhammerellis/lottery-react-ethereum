import Web3 from "web3";

//grab the provider injected by metamask via global window variable and set it as provider for our newer version of web3
const web3 = new Web3(window.web3.currentProvider);

export default web3;
