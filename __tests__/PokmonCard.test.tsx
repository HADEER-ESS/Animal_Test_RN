
import { describe, it, expect } from "@jest/globals"
import { render } from "@testing-library/react-native";
import PokemonCard from "../src/component/PokemonCard";
describe("Pokemon Card", () => {

    it("should render income data", () => {

        const { getByTestId } = render(<PokemonCard id={1} img_referance={"https://www.pokemon.com"} name={"Pokemon"} />)
        const pokemonName = getByTestId("pokemon_name");
        const pokemonImage = getByTestId("pokemon_image");

        expect(pokemonName).toBeDefined();
        expect(pokemonImage).toBeTruthy();
    });


});
