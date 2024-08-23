export default function About(): JSX.Element {
  return (
    <div className="">
      <div className="">
        <h5 className="text-[1.5em] font-[700]">About App</h5>
      </div>
      <div className="bg-blue-800 rounded-2xl">
        <div className="p-5 flex flex-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s"
            alt="image-app"
            className="w-1/2 rounded-2xl"
          />
          <div className="flex flex-col px-5 w-1/2">
            <div className="text-white ">
              <p className="text-[1.5em] font-[600]">Bali News App</p><br />
              <p className="text-[0.85em]">
                Discover Bali like never before with Bali News! Your ultimate
                guide to Bali's vibrant culture, breathtaking landscapes, and
                hidden gems. Whether you're a local or a traveler, Bali News
                keeps you updated with the latest events, top holiday
                destinations, and insider tips to make your Bali experience
                unforgettable.
                <br />
                <br />
                Stay ahead with real-time news, explore curated guides on the
                best places to visit, eat, and relax, and immerse yourself in
                the rich traditions and lifestyle of Bali. Get personalized
                recommendations, exclusive deals, and navigate the island like a
                pro. Don't miss out on the adventure – download Bali News today
                and start exploring the paradise that is Bali!
              </p>
            </div>
            <div className="flex flex-row gap-[1em] py-5">
              <div className="">
                <img
                  src="images/icon/play-store.png"
                  alt="play-store"
                  className="w-[10em]"
                />
              </div>
              <div className="">
                <img
                  src="images/icon/app-store.png"
                  alt="app-store"
                  className="w-[10em]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
