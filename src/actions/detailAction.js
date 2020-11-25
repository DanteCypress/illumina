import axios from "axios";
import { getDetailURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const detailData = await axios.get(getDetailURL(id));
  const screenData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
