import React from "react";

const IndexHero = () => {
  const alamat =
    "Jalan Tegar Beriman Ruko Cibinong City Center E20, Pakansari, Cibinong, Bogor, West Java";
  return (
    <>
      <section
        className="w-100 h-100 lg:h-screen bg-no-repeat bg-cover bg-bottom lg:bg-right-bottom py-32 lg:pb-auto"
        style={{ backgroundImage: "url(/assets/bg-index.webp)" }}
        id="hero"
      >
        <div className="md:w-2/3 lg:w-2/6 ml-4 md:ml-20 text-white flex flex-col justify-center h-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mt-32">
            Welcome to<br></br>
            <span className="text-3xl md:text-4xl lg:text-5xl inline-block mt-4 italic font-semibold">
              Laika Petshop and Veterinary Services
            </span>
          </h1>
          <div className="flex mt-4 items-center">
            <svg
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M18.6315 30.6816a1.4487 1.4487 0 001.2173.6572c.5117 0 .9614-.2629 1.225-.6572l8.5443-13.1603c1.1475-1.7707 1.8143-3.7192 1.8143-5.977C31.4246 5.0183 26.2841 0 19.8488 0c-6.4354 0-11.576 5.0182-11.576 11.5443 0 2.2578.6669 4.2063 1.8144 5.977l8.5443 13.1603zm1.2173-25.733c3.6518 0 6.6136 2.9538 6.6136 6.5957 0 3.6418-2.9618 6.5956-6.6136 6.5956-3.6519 0-6.6137-2.9538-6.6137-6.5956 0-3.642 2.9618-6.5957 6.6137-6.5957zm8.4822 20.0652l-8.4822 11.2737-8.4823-11.2737c-2.8998 1.5156-4.7529 3.7811-4.7529 6.325 0 4.5543 5.9237 8.2503 13.2352 8.2503 7.3114 0 13.2351-3.696 13.2351-8.2503 0-2.5439-1.8531-4.8094-4.7529-6.325z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h39.6976v39.5891H0z" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm lg:text-base">{alamat}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexHero;
