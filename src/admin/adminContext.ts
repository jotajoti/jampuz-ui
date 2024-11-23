import {Dispatch, ReactNode, SetStateAction} from "react";
import {useOutletContext} from "react-router";

export type AdminContext = {
    setNavigationCenter: Dispatch<SetStateAction<ReactNode | null>>
    setNavigationButtons: Dispatch<SetStateAction<ReactNode[]>>
    admin: { id: string, name: string }
}

export const useAdminContext = () => useOutletContext<AdminContext>()
