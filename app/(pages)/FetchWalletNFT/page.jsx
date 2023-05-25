/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import * as Web3 from "@solana/web3.js";
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";
import axios from "axios";

const FetchWalletNFT = () => {
  const [nftData, setNftData] = useState([]);

  // Connect to the Phantom wallet
  const connection = new Web3.Connection(
    "https://solana-mainnet.g.alchemy.com/v2/1oPClixlYy018dkAWRvQ2ORci-qK4wb8"
  );

  const getWalletNFTData = async () => {
    // const ownerAddress = "9MVyRpshLWaVjUScg9VgHxy4VRXvGto5sZTTZ9yEmrmb";
    const ownerAddress = "9rWmyA7CEYCoqdQkHoGNv8HMR3L7DUhPKEntf7uVFe2E";

    const publicAddress = await resolveToWalletAddress({
      text: ownerAddress,
    });

    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress,
      connection,
    });

    // for await (const nftData of nftArray) {
    //   const res = await fetch(nftData.data.uri, { next: { revalidate: 60 } });
    //   const jsonResponce = await res.json();
    //   setNftData((prevData) => [...prevData, jsonResponce]);
    // }
    for await (const nftData of nftArray) {
      await axios
        .get(nftData.data.uri, {
          next: { revalidate: 60 },
        })
        .then((res) => {
          const jsonResponce = res.data;
          setNftData((prevData) => [...prevData, jsonResponce]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getWalletNFTData();
  }, []);

  return (
    <div>
      <h1>My NFTs</h1>
      <div className="grid grid-cols-4 gap-8 mx-auto container">
        {[...new Set(nftData)]?.map((nft, i) => (
          <div key={i}>
            <img
              className="rounded-xl  h-96 w-full"
              src={nft.image}
              alt={nft.name}
            />
            <h2 className="text-2xl my-3">{nft.name}</h2>
            <p className="text-base ">{nft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchWalletNFT;
