
import React from 'react';
import { fireEvent, render } from "@testing-library/react-native"
import CustomeButton from "../src/component/CustomeButton"
import { describe, expect, it, jest } from '@jest/globals';

/**
 * TEST CASES
 * 1- Make sure button render in screen with its text
 * 1`- Style changes after PRESS (optional)
 * 2- Filter function called onPress
 */
describe("Cusomte Button Component", () => {

    it("Should render on screen with text", async () => {

        const { getByTestId } = render(<CustomeButton title={"search"} />);
        const btn = getByTestId('search_btn');

        expect(btn).toBeTruthy();
    });

    it("function fire when the button is pressed", () => {

        const mockFunction = jest.fn();

        const { getByTestId } = render(<CustomeButton onPressAction={mockFunction} title={"search"} />);
        const btn = getByTestId('search_btn');

        fireEvent.press(btn);
        expect(mockFunction).toBeCalled();
    });
});

