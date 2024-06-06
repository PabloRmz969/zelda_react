
type TGame = {
  game : {
    id: string;
    name: string;
    image: string;
  },
  ind: number
};
export const Game = ({game, ind}: TGame) => {
  const { id, image, name} = game;
  return (
    <>
      <div id={id} className={(ind == 0) ? 'game-info active' : 'game-info'} data-indx={`game-${ind}`}>
        <img className="front-page-img animate__animated" src={image} alt={name} />
        <div className="text-center w-100 container-title">
          <div className="hide-text"></div>
          <div className="square-txt">
            <h1 className="text-botw title-front animate__animated">{name}</h1>
          </div>
          <div className="hide-text"></div>
        </div>
      </div>
    </>
  );
};
