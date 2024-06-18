import { useEffect } from "react";

import { Games } from "../components";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import $ from "jquery";

const back_org = (pos: JQuery<HTMLElement>) => {
  $(pos).css(
    "transform",
    `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  );
};

const next = () => {
  const no_images = $(".front-page-img").length;
  const active_img = $(".front-page-img.active");
  const pos = $(".front-page-img.active").data("pos");

  if (pos && parseInt(pos) < no_images) {
    const nxt_img = $(`#img-${pos && parseInt(pos) + 1}`);
    const colors_top = $(`.fronts-imgs._${pos - 1} .colors-top`);
    const colors_left = $(`.fronts-imgs._${pos - 1} .colors-left`);
    const colors_right = $(`.fronts-imgs._${pos - 1} .colors-right`);
    const nxt_colors_top = $(`.fronts-imgs._${pos} .colors-top`);
    const nxt_colors_left = $(`.fronts-imgs._${pos} .colors-left`);
    const nxt_colors_right = $(`.fronts-imgs._${pos} .colors-right`);

    const active_title = $(`.content-titles._${pos - 1} .titles-content`);
    const nxt_title = $(`.content-titles._${pos} .titles-content`);


    $(active_img).css(
      "transform",
      `translate3d(0px, -${pos * 110}vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_top).removeClass('active');
    $(colors_top).css(
      "transform",
      `translate3d(-50vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_left).css(
      "transform",
      `translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_right).css(
      "transform",
      `translate3d(0px, -50vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(active_title).css(
      "transform",
      `translate3d(0px, -${pos * 110}vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    let duration = pos / 10 + 2.1;
    pos > 1 && $(active_img).css("transition-duration", `${duration}s`);
    //transition-duration: 1s
    $(nxt_colors_top).addClass('active');
    back_org(nxt_colors_top);
    back_org(nxt_colors_left);
    back_org(nxt_colors_right);
    back_org(nxt_img);
    console.log(nxt_title)
    $(nxt_title).css(
      "transform",
      `translate3d(0px, -${(pos - 1)*100 + 50}vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(active_img).removeClass("active");
    $(nxt_img).addClass("active");
  }
};

const prev = () => {
  const active_img = $(".front-page-img.active");
  const id_active =
    active_img && $(active_img)?.attr("id")?.toString().replace("img-", "");
  if (id_active && parseInt(id_active) > 1) {
    const prv_img = $(`#img-${id_active && parseInt(id_active) - 1}`);
    const colors_top = $(
      `.fronts-imgs._${parseInt(id_active) - 1} .colors-top`
    );
    const colors_left = $(
      `.fronts-imgs._${parseInt(id_active) - 1} .colors-left`
    );
    const colors_right = $(
      `.fronts-imgs._${parseInt(id_active) - 1} .colors-right`
    );
    const prv_colors_top = $(
      `.fronts-imgs._${parseInt(id_active) - 2} .colors-top`
    );
    const prv_colors_left = $(
      `.fronts-imgs._${parseInt(id_active) - 2} .colors-left`
    );
    const prv_colors_right = $(
      `.fronts-imgs._${parseInt(id_active) - 2} .colors-right`
    );

    const active_title = $(`.content-titles._${parseInt(id_active) - 1} .titles-content`);
    const prv_title = $(`.content-titles._${parseInt(id_active) - 2} .titles-content`);
     
    $(active_img).css(
      "transform",
      `translate3d(0px, 100vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(prv_img).css("transition-duration", `1s`);
    back_org(prv_img);

    $(colors_top).css(
      "transform",
      `translate3d(50vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_top).removeClass('active');
    $(colors_left).css(
      "transform",
      `translate3d(0px, -50vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_right).css(
      "transform",
      `translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(active_title).css(
      "transform",
      `translate3d(0px, 100vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(prv_colors_top).addClass('active');
    back_org(prv_colors_top);
    back_org(prv_colors_left);
    back_org(prv_colors_right);

    $(prv_title).css(
      "transform",
      `translate3d(0px, ${(parseInt(id_active) - 2)*100 + 50}vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(active_img).removeClass("active");
    $(prv_img).addClass("active");
  }
};

export const GamesPage = () => {
  useEffect(() => {
    document.body.classList.add("games-scroll");
    setTimeout(() => {
      $(".shape-in").addClass("animate__slideOutLeft");
    }, 400);
  }, []);

  return (
    <ReactScrollWheelHandler
      style={{ height: "100vh" }}
      upHandler={() => {
        prev();
      }}
      downHandler={() => {
        next();
      }}
    >
      <div className="shape-in animate__animated"></div>
      <div className="container">
        <div className="container-scroll">
          <Games />
        </div>
      </div>
    </ReactScrollWheelHandler>
  );
};
