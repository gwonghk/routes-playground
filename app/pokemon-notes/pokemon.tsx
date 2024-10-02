import Image from 'next/image';

const Pokemon = ({
  id,
  name,
  img,
  cry,
}: {
  id: number;
  name: string;
  img: string;
  cry: string;
}) => {
  return (
    <div className="space-y-5">
      <div className="relative h-48 w-48">
        <Image
          src={img}
          alt={`Picture of ${name}`}
          className="rounded-full"
          fill
        />
      </div>
      <div className="text-base font-semibold uppercase tracking-wider text-gray-400">
        {`#${id} ${name}`}
      </div>
      <audio controls src={cry}></audio>
    </div>
  );
};

export default Pokemon;
