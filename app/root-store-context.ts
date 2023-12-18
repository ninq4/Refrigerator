import RootStore from "./store/root-store";
import { createContext, useContext } from "react";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useRootStore = () => {
    const context = useContext(RootStoreContext)
    if (!context) {
        throw new Error('useRootStore must be used within a RootStoreProvider')
    }
    return context
}