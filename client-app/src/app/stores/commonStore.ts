import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverErrors";

export default class CommonStore {
    token: string | null = localStorage.getItem('jwt');
    error: ServerError | null = null;
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if (token) {
                    localStorage.setItem('jwt', token);
                } else {
                    localStorage.removeItem('jwt');
                }
            }
        )
    }
    
    setServerError(error: ServerError) {
        this.error = error;
    }

    setToken = (token: string | null) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}