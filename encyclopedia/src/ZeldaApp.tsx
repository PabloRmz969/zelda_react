import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import 'react-tooltip/dist/react-tooltip.css'


export const ZeldaApp = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </>
  );
};
