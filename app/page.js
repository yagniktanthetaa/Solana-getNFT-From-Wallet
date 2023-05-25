import React from "react";
import ClickIncrease from "./(pages)/ClickIncrease/page";
import HoverIncrease from "./(pages)/HoverIncrease/page";
import FetchWalletNFT from "./(pages)/FetchWalletNFT/page";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>This is Home Page...</h1>
        {/* <ClickIncrease />
        <HoverIncrease /> */}
        <FetchWalletNFT />
      </div>
    </>
  );
};

export default Home;
