
import { describe, expect, it, jest } from '@jest/globals';
import axios, { AxiosResponse } from 'axios';
import { FetchDogsData } from '../src/api/Data/FetchPokemon';
import { DogBreed } from '../src/util/Pokemon';

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;


describe("Fetch Pokemon Function", () => {

    it("Fetch Pokemon data from URL using AXIOS", async () => {

        const mockResponse: AxiosResponse<{ results: DogBreed[] }> = {
            data: [
                {
                    weight: {
                        imperial: "6 - 13",
                        metric: "3 - 6"
                    },
                    height: {
                        imperial: "9 - 11.5",
                        metric: "23 - 29"
                    },
                    id: 1,
                    name: "Affenpinscher",
                    bred_for: "Small rodent hunting, lapdog",
                    breed_group: "Toy",
                    life_span: "10 - 12 years",
                    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
                    origin: "Germany, France",
                    reference_image_id: "BJa4kxc4X"
                }
            ],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };
        mockAxios.get.mockResolvedValue(mockResponse);

        const data = await FetchDogsData();

        expect(data).toEqual(
            [{
                weight: {
                    imperial: "6 - 13",
                    metric: "3 - 6"
                },
                height: {
                    imperial: "9 - 11.5",
                    metric: "23 - 29"
                },
                id: 1,
                name: "Affenpinscher",
                bred_for: "Small rodent hunting, lapdog",
                breed_group: "Toy",
                life_span: "10 - 12 years",
                temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
                origin: "Germany, France",
                reference_image_id: "BJa4kxc4X"
            }]
        );

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});
