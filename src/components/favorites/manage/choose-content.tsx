interface MockRcommendList {
  id: number;
  image: string;
  judul: string;
  description: string;
}
[];

const mockRecommend: MockRcommendList[] = [
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
];

export default function ChooseContent(): JSX.Element {
  return (
    <div className="py-10">
      <div className="flex flex-wrap gap-[1.5em] w-full">
        {mockRecommend.map((item: MockRcommendList, index: number) => (
          <div key={index} className="flex-col w-1/6">
            <div className="flex flex-row">
              <img
                src={item.image}
                alt={`image-${index}`}
                className="w-full rounded-2xl"
              />
              <div className="relative cursor-pointer">
                <p className="absolute bg-white h-[1.6em] w-[1.6em]  text-center rounded-full text-[1em] top-[0.5em] left-[-2.5em]">&times;</p>
              </div>
            </div>
            <p className="text-[1em] font-[600]">{item.judul}</p>
            <p className="text-[0.85em] font-[400]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
