import { Provider } from "react-redux";
import { Navigation } from "../navigation/Navigation";
import { setupStore } from "../store/store";
const store = setupStore()
function App() {
  document.title = import.meta.env.VITE_APP_TITLE || "Заголовок по умолчанию";
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>

  );
}

export default App;
