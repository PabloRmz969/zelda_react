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
    const active_bullet = $('.container-bullet.active');
    const nxt_bullet = $('.container-bullet.active').next();

    const active_title = $(`.content-titles .titles-text._${pos - 1}`);
    const nxt_title = $(`.content-titles .titles-text._${pos}`);

    $(active_img).css(
      "transform",
      `translate3d(0px, -${pos * 110}vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_top).removeClass("active");
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
      `translate3d(0px, -110vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    let duration = pos / 10 + 2.1;
    pos > 1 && $(active_img).css("transition-duration", `${duration}s`);

    $(nxt_colors_top).addClass("active");
    back_org(nxt_colors_top);
    back_org(nxt_colors_left);
    back_org(nxt_colors_right);
    back_org(nxt_img);

    $(nxt_title).css(
      "transform",
      `translate3d(0px, 43vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(active_img).removeClass("active");
    $(active_bullet).removeClass("active");
    $(nxt_img).addClass("active");
    $(nxt_bullet).addClass("active");
  }
};

const prev = () => {
  const active_img = $(".front-page-img.active");
  const pos = $(".front-page-img.active").data("pos");
  // const id_active =
  //   active_img && $(active_img)?.attr("id")?.toString().replace("img-", "");
  if (pos && parseInt(pos) > 1) {
    const prv_img = $(`#img-${pos && parseInt(pos) - 1}`);
    const colors_top = $(`.fronts-imgs._${parseInt(pos) - 1} .colors-top`);
    const colors_left = $(`.fronts-imgs._${parseInt(pos) - 1} .colors-left`);
    const colors_right = $(`.fronts-imgs._${parseInt(pos) - 1} .colors-right`);
    const prv_colors_top = $(`.fronts-imgs._${parseInt(pos) - 2} .colors-top`);
    const prv_colors_left = $(
      `.fronts-imgs._${parseInt(pos) - 2} .colors-left`
    );
    const prv_colors_right = $(
      `.fronts-imgs._${parseInt(pos) - 2} .colors-right`
    );

    const active_title = $(
      `.content-titles .titles-text._${parseInt(pos) - 1}`
    );
    const prv_title = $(`.content-titles .titles-text._${parseInt(pos) - 2}`);
    const active_bullet = $('.container-bullet.active');
    const prev_bullet = $('.container-bullet.active').prev();

    $(active_img).css(
      "transform",
      `translate3d(0px, 110vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(prv_img).css("transition-duration", `1s`);
    back_org(prv_img);

    $(colors_top).css(
      "transform",
      `translate3d(50vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );
    $(colors_top).removeClass("active");
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
      `translate3d(0px, 110vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(prv_colors_top).addClass("active");
    back_org(prv_colors_top);
    back_org(prv_colors_left);
    back_org(prv_colors_right);

    $(prv_title).css(
      "transform",
      `translate3d(0px, 43vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    );

    $(active_img).removeClass("active");
    $(active_bullet).removeClass("active");
    $(prv_img).addClass("active");
    $(prev_bullet).addClass("active");
  }
};

const changeBullet = async (id: number) => {
  const active_bull = $(".container-bullet.active");
  const active_id = $(active_bull).data("id");
 
  if (id > active_id) {
    const no_next = id - active_id;
    let i = 0;
    const nxt_interval = setInterval(function(){
      if(i >= no_next){
        clearInterval(nxt_interval);
      } else {
        next();
        i++;
      }
    },650);
  } else {
    const no_prev = active_id - id;
    let i = 0;
    const prv_interval = setInterval(function(){
      if(i >= no_prev){
        clearInterval(prv_interval);
      } else {
        prev();
        i++;
      }
    },650);
  }
};

const onPageLoad = () => {
  setTimeout(() => {
    $(".shape-in").addClass("animate__slideOutLeft");
  }, 400);
};
