import React from 'react'
import Web3 from 'web3';
// import Logo from 'assets';
import { useState, useEffect } from 'react';
// import 'styles/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

const ether = () => {
    const router = useRouter();
//   const { hash } = router.query
    const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [balance, setBalance] = useState();
  const [trans_count, setTrans_count] = useState();
  
  var web3 = new Web3('https://mainnet.infura.io/v3/b583160797e24b88a643ad9a38b0f5aa');

  var inf=web3.utils.toWei('34', 'ether');

  var singleGasFee = web3.utils.toDecimal('0x998388ca6');
  var totalGas = 6156205;
  var totalFeeInWei = singleGasFee * totalGas;
  var totalFeeInEther = web3.utils.fromWei(totalFeeInWei.toString(), 'ether');
  var accountAddress = '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8';
  
  // var block= web3.eth.getBlock(1);
  //  var latest_block=web3.eth.getBlock();
  //  console.log(latest_block);
  // var mine=web3.ismining();

  useEffect( () =>{
    // const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    
    // var web3 = new Web3('https://mainnet.infura.io/v3/b583160797e24b88a643ad9a38b0f5aa');
    

    async function loadTrans_count(){

      const trans_count=await web3.eth.getTransactionCount(accountAddress);

      setTrans_count(trans_count);
    }

    async function loadBalance(){
      const network = await web3.eth.net.getNetworkType();
      const balance = await web3.eth.getBalance(accountAddress);
      const balance1=web3.utils.fromWei(balance, 'ether')

      setNetwork(network);
      setBalance(balance1);
    }

    
    loadBalance();
    loadTrans_count();

  }, [account, network, balance,trans_count])
  return (
    <>
    <head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
    </head>
    <div className='container'>
   <br></br>
    {/* <img src="components/ether.png" alt="BigCo Inc. logo"/>               */}
<div class="container bootstrap snippets bootdey">
  <div class="row">
    <div class="col-md-12">
    
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-8">
    <div class="tile purple">
        <h3 class="title">Your Account</h3>
        <p>{accountAddress}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <div class="tile red">
        <h3 class="title">Your Balance </h3>
        <p> {balance}</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="tile orange">
        <h3 class="title">Network</h3>
        <p>{network}</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="tile green">
        <h3 class="title">Transaction Count</h3>
        <p>{trans_count}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <div class="tile blue">
        <h3 class="title">Single Gas Fee</h3>
        <p>{singleGasFee}</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="tile blue">
        <h3 class="title">Total Fee In Wei</h3>
        <p>{totalFeeInWei}</p>
      </div>
    </div> 
    <div class="col-sm-4">
      <div class="tile blue">
        <h3 class="title">Total Fee In Ether</h3>
        <p>{totalFeeInEther}</p>
      </div>
    </div> 

  </div>
</div>    
</div>

  
      </>
  );
}

export default ether