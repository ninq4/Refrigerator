"use client";
import RootStore from "./store/root-store";
import { createContext, useContext } from "react";
export const RootStoreContext = createContext<RootStore | null>(null)

export const useRootStore = () => {
    const context = useContext(RootStoreContext)
    return context
}