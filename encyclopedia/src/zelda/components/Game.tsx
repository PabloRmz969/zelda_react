type TGame = {
  id: string;
  name: string;
  image: string;
};
export const Game = ({ id, name, image }: TGame) => {
  return (
    <>
      <div id={id} className="game-info">
        <img className="front-page-img" src={image} alt={name} />
        <p className="text-botw ">{name}</p>
      </div>
    </>
  );
};
