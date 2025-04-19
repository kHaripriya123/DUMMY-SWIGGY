import { render , screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../MOCKS/resCardData.json";



it("should render RestaurantCard component with props Data" , () => {
    render(<RestaurantCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument();

});