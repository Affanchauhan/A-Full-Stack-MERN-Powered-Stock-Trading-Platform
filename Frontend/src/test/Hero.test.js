
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import Hero from "../Landing_Page/Home/Hero";

describe('Hero Component', () => {
  test("renders hero image",()=>{
    render(<Hero/>);
    const heroImage = screen.getByAltText('Hero Image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","./Public/Media/images/homeHero.png")
  })
});