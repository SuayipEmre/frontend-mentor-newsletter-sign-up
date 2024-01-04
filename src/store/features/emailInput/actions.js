import { _setEmail, _setIsSubmit } from ".";
import { store } from "../../app";


export const setIsSubmit = (isSubmit) => store.dispatch(_setIsSubmit(isSubmit))
export const setUserEmail = (mail) => store.dispatch(_setEmail(mail))