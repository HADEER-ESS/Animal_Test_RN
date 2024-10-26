
import { describe, it, expect } from "@jest/globals"
import { render } from "@testing-library/react-native";
import PokemonCard from "../src/component/PokemonCard";
describe("Pokemon Card", () => {

    it("should render income data", async () => {

        const { getByTestId } = render(<PokemonCard id={1} reference_image_id={"https://www.pokemon.com"} name={"Pokemon"} />)
        const pokemonName = getByTestId("pokemon_name");
        const pokemonImage = getByTestId("pokemon_image");

        expect(pokemonName).toBeDefined();
        expect(pokemonImage).toBeTruthy();
    });


});
