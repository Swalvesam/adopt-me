import {useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext.js";
import useBreedList from "./useBreedList.js";
import Results from "./results.js";


const ANIMALS = ["bird", "cat", "dog", "bunny", "elephant", "squirrel"]

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [ theme ] = useContext(ThemeContext);

    useEffect(() => {
        requestPets();
    }, []); //eslint-disable-line react-hooks/exhaustive-dep

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form 
            onSubmit = {(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange = {(event) => setLocation(event.target.value)} value={location} 
                    placeholder="Location" />
                </label>
                <label htmlFor="animal"> Animal
                <select
                id="animal"
                value={animal}
                onChange= {(e) => setAnimal(e.target.value)}
                onBlur= {(e) => setAnimal(e.target.value)}>
                
                <option value=""></option>
                {
                    ANIMALS.map(animal => (
                        <option value={animal} key={animal}>
                            {animal}
                        </option>
                    ))
                }
                </select>
                </label>
                <label htmlFor="breed"> Breed
                <select
                id="breed"
                value={breed}
                onChange= {(e) => setBreed(e.target.value)}
                onBlur= {(e) => setBreed(e.target.value)} >
                
                <option value=""></option>
                {
                    breeds.map(breed => (
                        <option value={breed} key={breed}>
                            {breed}
                        </option>
                    ))
                }
                </select>
                </label>
                <button style={{backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;