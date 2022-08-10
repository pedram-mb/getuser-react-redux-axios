import React from "react";
import UserComponents from "./userComponents";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Store from "./redux/store";

const App = ()=>{
  return(
    <Provider store={Store}>
      <div>
        <UserComponents />
      </div>
    </Provider>
  )
}
export default App;

