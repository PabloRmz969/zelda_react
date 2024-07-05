import { ZeldaApi } from "../api";
import { BossInfo, GameInfo, GenericInfo } from "../zelda";

export const getAttributes = () => {
  const getName = (id: string, arr: GameInfo[] | any) => {
    let response = "";
    for (const ind in arr) {
      if (arr[ind].id === id) {
        response = arr[ind].name;
        break;
      }
    }
    return response;
  };

  const appendArray = (arr: [], res_arr: []) => {
    for (let i = 0; i < arr.length; i++) {
      res_arr.push(arr[i]);
    }
  };



  const generateArr = async (word: string) => {
    try {
      let data_response: any = [];
      if (word == "games") {
        let { data } = await ZeldaApi.get(`/${word}?limit=50`);
        let { data: tmp_data } = data;
        appendArray(tmp_data, data_response);
      } else if (word == "dungeons") {
        for (let i = 0; i < 8; i++) {
          let { data } = await ZeldaApi.get(`/${word}?limit=50&page=${i}`);
          let { data: tmp_data } = data;
          appendArray(tmp_data, data_response);
        }
      }
      return data_response;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const assignNewInfo = (bosses_data: BossInfo[], arr: any, typ: string) => {
    for (let i = 0; i < bosses_data.length; i++) {
      let ele_bs: string[];
      if (typ === "games") {
        ele_bs = bosses_data[i].appearances;
      } else {
        ele_bs = bosses_data[i].dungeons;
      }
      let tmp_arr: GenericInfo[] = [];
      if (ele_bs.length > 0) {
        for (let j = 0; j < ele_bs.length; j++) {
          const app_id = ele_bs[j].replace(
            `https://zelda.fanapis.com/api/${typ}/`,
            ""
          );
          const name = getName(app_id, arr);
          name != "" && tmp_arr.push({ id: app_id, name });
        }
      }
      switch (typ) {
        case "games":
          bosses_data[i].appearancesInfo = tmp_arr;
          break;
        case "dungeons":
          bosses_data[i].dungeonsInfo = tmp_arr;
          break;
        default:
          break;
      }
    }
  };
  return {
    getName,
    generateArr,
    assignNewInfo,
  };
};
