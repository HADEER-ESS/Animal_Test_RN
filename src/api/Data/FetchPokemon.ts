import axios from "axios";
import { API } from "..";
import { DogBreed } from "../../util/Pokemon";


export const FetchDogsData = async (): Promise<DogBreed[]> => {
    try {
        let response = await axios.get(API);
        if (response.status === 200) {
            return response.data;
        }
        return [];
    } catch (error) {
        console.log("error in fetch pokemon data ", error);
        return [];
    }
};
