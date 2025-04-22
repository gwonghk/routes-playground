import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Pokemon from './pokemon';

const getRandomGenOnePokemon = async () => {
  const id = Math.floor(Math.random() * 151) + 1;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const getServerSideProps = (async () => {
//   const res = await getRandomGenOnePokemon();
//   return {
//     props: {
//       pokemon: res,
//     },
//   };
// }) satisfies GetServerSideProps<{ pokemon: PokemonT }>;

type PokemonT = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  cries: {
    latest: string;
  };
};

const PokemonNotesPage = async () => {
  //   const [pokemon, setPokemon] = React.useState({});

  //   const handleOnClick = async () => {
  //     const {
  //       id,
  //       name,
  //       sprites: { front_default: img },
  //       cries: { latest: cry },
  //     } = await getRandomGenOnePokemon();
  //     setPokemon({ id, name, img, cry });
  //   };

  const pokemon: PokemonT = await getRandomGenOnePokemon();
  if (!pokemon) {
    return null;
  }

  const {
    id,
    name,
    sprites: { front_default: img },
    cries: { latest: cry },
  } = pokemon;

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Pokemon Notes</h1>
      {id ? (
        <Pokemon id={id} name={name} img={img} cry={cry} />
      ) : (
        <SkeletonCard />
      )}
      <div className="flex gap-2">
        {/* <Button onClick={handleOnClick}>Random Pokemon</Button> */}
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="space-y-3 rounded-2xl bg-gray-900/80 p-4">
    <div className="h-14 rounded-lg bg-gray-700" />
    <div className="h-3 w-3/12 rounded-lg bg-vercel-cyan" />
    <div className="h-3 w-11/12 rounded-lg bg-gray-700" />
    <div className="h-3 w-8/12 rounded-lg bg-gray-700" />
  </div>
);

export default PokemonNotesPage;
