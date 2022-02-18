import { createContext } from "react";

const AppContext = createContext({});

export const AppContextProvider = AppContext.Provider;
export default AppContext;