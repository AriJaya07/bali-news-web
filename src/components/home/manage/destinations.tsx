interface MockDestinationsList {
  id: number;
  image: string;
  judul: string;
  description: string;
}
[];

const mockDestinations: MockDestinationsList[] = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
];

export default function Destinations(): JSX.Element {
  return (
    <div className="">
      <div className="">
        <h5 className="text-[1.5em] font-[700]">Destinations</h5>
      </div>
      <div className="flex flex-wrap">
        {mockDestinations.map((item: MockDestinationsList, index: number) => {
          return (
            <div key={index} className="flex flex-row gap-[1em] p-2 pb-10 w-1/2">
              <img
                src={item.image}
                alt={`image-${index}`}
                className="w-[20em] rounded-2xl"
              />
              <div className="flex flex-col py-2">
                <p className="text-[1em] font-[600]">{item.judul}</p>
                <p className="text-[0.85em]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
