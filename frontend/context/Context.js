import  {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [token, setToken] = useState("");
    const url = 'http://localhost:8000'
    return (
        <AppContext.Provider value={[url, token, setToken]}>
            { children }
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);