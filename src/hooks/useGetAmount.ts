import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

export const useGetAmount = () => {
    return useSelector((state: RootState) => state.finalAmount)
}