import { useSelector } from "react-redux";
import store from ".";

export type RootGetState = ReturnType<typeof store.getState>;

export const useAppSelector = useSelector.withTypes<RootGetState>();
