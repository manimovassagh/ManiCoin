const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timeStamp, data, previousHash = "") {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = "";
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timeStamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class BlockChain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock() {
   return new Block(0, "01/01/2018", "Genesis Block", "0");
    
   
}}
