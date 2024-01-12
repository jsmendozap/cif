import React from "react";
import Header from "../components/Header";

const Private = ({ page }) => {
  return (
    <>
      <Header />
      <main>
        <div class="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_70%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        {page}
      </main>
    </>
  );
};

export default Private;
