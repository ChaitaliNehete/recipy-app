import React,{useContext,useState} from 'react';
import menu from './data'

const AppContext=React.createContext()
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const AppProvider = ({children}) => {
    const [menuItems,setMenuItems]=useState(menu);
    const [categories,setCategories]=useState(allCategories);

    const filterItems=(category)=>{
        if(category==='all'){
            setMenuItems(menu);
            return;
        }
        const newItems=menu.filter((item)=>item.category===category);
        setMenuItems(newItems)
    }
    return (
        <AppContext.Provider value={{categories,setCategories,filterItems,menuItems}}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext};