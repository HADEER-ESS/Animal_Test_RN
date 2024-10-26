import { describe, expect, it } from '@jest/globals';
import { FilterArray } from '../src/util/filterArray';


//FUNCTION TESTING
/**
 * TEST CASES
 * 1- GIVEN => array && search value is match -> HAPPY CASED
 * 2- GIVEN => array && empty string ''
 * 3- GIVEN => array && diffeent litter case
 * 4- GIVEN => array && search value not match
 * 5- GIVEN => empty array && search value
 */



describe("filterArray function", () => {

    const mockArray = [
        { id: 1, name: "office" },
        { id: 2, name: "hospital" },
        { id: 3, name: "park" }
    ];

    it("should filter the array and return the matched values", () => {

        const result = FilterArray(mockArray, "pa");

        expect(result).toEqual([{ id: 3, name: "park" }]);

    });

    it("should handle empty string searched value to return the orifinal array", () => {

        const result = FilterArray(mockArray, '');

        expect(result).toEqual(mockArray);
    });

    it("should handle different value litter cased and low-case all searched value alphabit, and return the array", () => {

        const result = FilterArray(mockArray, "HosPi");

        expect(result).toEqual([{ id: 2, name: 'hospital' }]);
    });

    it("should return empty array if there is no match value in array", () => {

        const result = FilterArray(mockArray, "zxy");

        expect(result).toEqual([]);
    });

    it("should return an empty array if there is no data in array", () => {

        const result = FilterArray([], "hos");

        expect(result).toEqual([]);
    });

});
