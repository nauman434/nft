import React from "react";
import { banner } from "../../Asset";

const Banner = () => {
  return (
    <section>
      <div
        className="flex flex-col w-full h-[90vh] items-start justify-end sm:px-32 px-6 pb-10"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-10 dark_transparent">
          <h1 className="text-[52px] font-clash_display font-bold text-primary">
            The Orbitians
          </h1>
          <p className="text-[24px] text-para">Minted on Sep 30, 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
