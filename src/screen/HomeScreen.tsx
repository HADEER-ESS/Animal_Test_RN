import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native';
import CustomeButton from '../component/CustomeButton';
import PokemonCard from '../component/PokemonCard';
import { DogBreed } from '../util/Pokemon';
import { FetchDogsData } from '../api/Data/FetchPokemon';
import { FilterArray } from '../util/filterArray';
import CustomeSearch from '../component/CustomeSearch';

const HomeScreen = () => {
    const [pokemonData, setPokemonData] = useState<DogBreed[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchDogsData();
            setPokemonData(data);
        };

        fetchData();
    }, []);

    function handleSearchButton() {
        let data = FilterArray(pokemonData, searchValue);
        setPokemonData(data);
    }

    function handleSearchInput(text: string) {
        setSearchValue(text);
    }

    return (
        <ScrollView>
            <CustomeSearch stateValue={searchValue} valueStateFun={handleSearchInput} />
            <CustomeButton onPressAction={handleSearchButton} title={'search'} />
            <FlatList
                testID="render_data_list"
                data={pokemonData}
                numColumns={2}
                style={{ marginTop: 12 }}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                ListEmptyComponent={<ActivityIndicator color={"#990000"} size={"large"} style={{ marginTop: '44%', justifyContent: 'center', alignItems: 'center' }} />}
                renderItem={({ item }) =>
                    <PokemonCard id={item.id} name={item.name} img_referance={item.reference_image_id} />
                }
            />
        </ScrollView>
    );
};

export default HomeScreen;
