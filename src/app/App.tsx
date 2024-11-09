import { Provider } from "react-redux";
import { Navigation } from "../navigation/Navigation";
import { setupStore } from "../store/store";
import { useEffect } from "react";
import { checkEnv } from "../hooks/checkEnv";
const store = setupStore()
function App() {
  document.title = import.meta.env.VITE_APP_TITLE || "Заголовок по умолчанию";
  if(import.meta.env.MODE === 'development'){
    useEffect(()=>{
      checkEnv()
    })
  }
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>

  );
}

export default App;
