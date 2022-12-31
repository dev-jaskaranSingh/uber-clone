import {Provider, useSelector} from 'react-redux';
import {store} from "./redux/store";
import HomeScreen from "./src/screens/HomeScreen";

// 1) Setup redux toolkit

export default function App() {
  return (
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
  );
}
