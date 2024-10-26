import 'react-native';
import React from 'react';
import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import CustomeSearch from "../src/component/CustomeSearch";

describe("Custome Search Test", () => {

    it("Should render Successfully", () => {
        const mockFun = jest.fn();
        const { getByTestId } = render(<CustomeSearch stateValue="" valueStateFun={mockFun} />);

        const input = getByTestId("search_input");

        expect(input).toBeDefined();
    });

    it("input value listen to the text change", async () => {

        const mockState = jest.fn((newValue: string) => { value = newValue; });
        let value = '';

        const { getByTestId, rerender } = render(<CustomeSearch stateValue={value} valueStateFun={mockState} />);
        const input = getByTestId('search_input');

        fireEvent.changeText(input, 'def');
        mockState('def');

        // re-render the component 
        rerender(<CustomeSearch stateValue={value} valueStateFun={mockState} />);

        expect(input.props.value).toBe('def');

    });
});
