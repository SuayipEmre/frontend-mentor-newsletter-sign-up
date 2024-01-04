import { useSelector} from "react-redux";

export const useIsSubmit = () => useSelector(state => state.usermail.isSubmit)
export const useUserEmail = () => useSelector(state  => state.usermail.useremail)