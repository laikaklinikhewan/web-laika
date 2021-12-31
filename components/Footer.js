const Footer = () => {
  const alamat =
    "Jalan Tegar Beriman Ruko Cibinong City Center E20, Pakansari, Cibinong, Bogor, West Java";
  return (
    <footer className="grid py-4 md:py-0 bg-black w-full px-16 text-white m-0">
      <p className="md:hidden text-sm mb-8">{alamat}</p>
      <div className="flex justify-between">
        <div className="flex md:w-2/4 lg:w-2/6">
          <a
            className="my-auto flex-shrink-0 mr-4"
            href="https://g.page/laikaklinikhewan?share"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current hover:text-mediaHover w-8 h-8"
              viewBox="0 0 40 40"
            >
              <g clipPath="url(#clip0)">
                <path d="M18.6315 30.6816a1.4487 1.4487 0 001.2173.6572c.5117 0 .9614-.2629 1.225-.6572l8.5443-13.1603c1.1475-1.7707 1.8143-3.7192 1.8143-5.977C31.4246 5.0183 26.2841 0 19.8488 0c-6.4354 0-11.576 5.0182-11.576 11.5443 0 2.2578.6669 4.2063 1.8144 5.977l8.5443 13.1603zm1.2173-25.733c3.6518 0 6.6136 2.9538 6.6136 6.5957 0 3.6418-2.9618 6.5956-6.6136 6.5956-3.6519 0-6.6137-2.9538-6.6137-6.5956 0-3.642 2.9618-6.5957 6.6137-6.5957zm8.4822 20.0652l-8.4822 11.2737-8.4823-11.2737c-2.8998 1.5156-4.7529 3.7811-4.7529 6.325 0 4.5543 5.9237 8.2503 13.2352 8.2503 7.3114 0 13.2351-3.696 13.2351-8.2503 0-2.5439-1.8531-4.8094-4.7529-6.325z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M0 0h39.6976v39.5891H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <p className="hidden md:block py-4 text-sm">{alamat}</p>
        </div>
        <div className="flex flex-row-reverse my-auto">
          <a href="https://api.whatsapp.com/send?phone=6281318611295&text=Halo%20Admin%20Saya%20Mau%20tanya%20tanya">
            <svg
              className="fill-current hover:text-mediaHover"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
            >
              <path d="M27.281 4.65C24.287 1.65 20.306 0 16.062 0 7.324 0 .212 7.112.212 15.856c0 2.794.731 5.525 2.119 7.925L.081 32l8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h.006c8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zm-11.212 24.4c-2.369 0-4.688-.637-6.713-1.837l-.481-.288-4.987 1.306 1.331-4.863-.313-.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-.006 7.275-5.919 13.188-13.181 13.188zm7.225-9.875c-.394-.2-2.344-1.156-2.706-1.288s-.625-.2-.894.2c-.262.394-1.025 1.288-1.256 1.556-.231.262-.462.3-.856.1s-1.675-.619-3.188-1.969c-1.175-1.05-1.975-2.35-2.206-2.744s-.025-.613.175-.806c.181-.175.394-.463.594-.694s.262-.394.394-.662c.131-.262.069-.494-.031-.694s-.894-2.15-1.219-2.944c-.319-.775-.65-.669-.894-.681-.231-.012-.494-.012-.756-.012s-.694.1-1.056.494c-.363.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c.2.262 2.794 4.269 6.769 5.981.944.406 1.681.65 2.256.837.95.3 1.813.256 2.494.156.762-.113 2.344-.956 2.675-1.881s.331-1.719.231-1.881c-.094-.175-.356-.275-.756-.475z" />
            </svg>
          </a>
          <a
            className="mr-8"
            href="https://www.instagram.com/laikaklinikhewan/"
          >
            <svg
              className="fill-current hover:text-mediaHover"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
            >
              <path d="M16 2.881c4.275 0 4.781.019 6.462.094 1.563.069 2.406.331 2.969.55.744.288 1.281.638 1.837 1.194.563.563.906 1.094 1.2 1.838.219.563.481 1.412.55 2.969.075 1.688.094 2.194.094 6.463s-.019 4.781-.094 6.463c-.069 1.563-.331 2.406-.55 2.969-.288.744-.637 1.281-1.194 1.837-.563.563-1.094.906-1.837 1.2-.563.219-1.413.481-2.969.55-1.688.075-2.194.094-6.463.094s-4.781-.019-6.463-.094c-1.563-.069-2.406-.331-2.969-.55-.744-.288-1.281-.637-1.838-1.194-.563-.563-.906-1.094-1.2-1.837-.219-.563-.481-1.413-.55-2.969-.075-1.688-.094-2.194-.094-6.463s.019-4.781.094-6.463c.069-1.563.331-2.406.55-2.969.288-.744.638-1.281 1.194-1.838.563-.563 1.094-.906 1.838-1.2.563-.219 1.412-.481 2.969-.55 1.681-.075 2.188-.094 6.463-.094zM16 0c-4.344 0-4.887.019-6.594.094-1.7.075-2.869.35-3.881.744-1.056.412-1.95.956-2.837 1.85-.894.888-1.438 1.781-1.85 2.831C.444 6.538.169 7.7.094 9.4.019 11.113 0 11.656 0 16s.019 4.887.094 6.594c.075 1.7.35 2.869.744 3.881.413 1.056.956 1.95 1.85 2.837.887.887 1.781 1.438 2.831 1.844 1.019.394 2.181.669 3.881.744 1.706.075 2.25.094 6.594.094s4.888-.019 6.594-.094c1.7-.075 2.869-.35 3.881-.744 1.05-.406 1.944-.956 2.831-1.844s1.438-1.781 1.844-2.831c.394-1.019.669-2.181.744-3.881.075-1.706.094-2.25.094-6.594s-.019-4.887-.094-6.594c-.075-1.7-.35-2.869-.744-3.881-.394-1.063-.938-1.956-1.831-2.844-.887-.887-1.781-1.438-2.831-1.844-1.019-.394-2.181-.669-3.881-.744-1.712-.081-2.256-.1-6.6-.1z" />
              <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zm0 13.55c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331S18.944 21.331 16 21.331zM26.462 7.456c0 1.06-.859 1.919-1.919 1.919s-1.919-.859-1.919-1.919.859-1.919 1.919-1.919 1.919.859 1.919 1.919z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
