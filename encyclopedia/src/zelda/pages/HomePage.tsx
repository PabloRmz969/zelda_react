import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    const classExists = document.querySelector("body") !== null;
    if (!classExists) return;
    document.body.classList.add("green-home");
    
    const shapeYellow: HTMLElement | null = document.getElementById(
      "shape-in"
    );
    if(shapeYellow !== null) {
      
    }
  });


  return (
    <>
      <div className="content-zelda">
        <div className="small-rec">
          <h3 className="text-botw text-center animate__animated animate__fadeInUp">
            It's a nice day to{" "}
          </h3>
        </div>
        <div className="big-rec">
          <h1 className="text-botw text-center animate__animated animate__fadeInUp">
            learn about <br></br>Zelda
          </h1>
        </div>
        <div className="pargh-rec left">
          <p className="text-botw text-center animate__animated animate__fadeInUp">
            Know things about the Zelda games throughout the time
          </p>
        </div>
        <div className="pargh-rec right">
          <p className="text-botw text-center animate__animated animate__fadeInUp">
            Use our advice to defeat that boss or finish the dungeons in that
            Zelda game.
          </p>
        </div>
      </div>
    </>
  );
};
