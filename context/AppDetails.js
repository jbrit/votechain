import { createContext, useState } from "react";

//create a context, with createContext api
export const appDetailsContext = createContext();
const { Provider } = appDetailsContext;

const AppDetailsProvider = (props) => {
  // this state will be shared with all components
  const [appDetails, setAppDetails] = useState({
    network: "",
    address: "",
  });

  return (
    <Provider value={[appDetails, setAppDetails]}>{props.children}</Provider>
  );
};

export default AppDetailsProvider;
