
// Type of props that will be accepted from utile function

import { DogBreed } from "./Pokemon";


// search for any item-name has same word of income search name
export const FilterArray = (
    data: DogBreed[],
    searchName: string
): DogBreed[] => {
    return data.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
    );
};
