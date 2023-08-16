import { useState, useEffect } from "react";
import DisplayContact from "./components/DisplayContact";
import Search from "./components/Search";
import Form from "./components/Form";
import nameService from "./services/names";
import Footer from "./components/Footer";
import Notification from "./components/Notification";

// this is the usual way to fetch data, however is good to use an useEffect hook
//  axios
//  .get('http://localhost:3001/phonebook')
//  .then( response => {
//     const phonebook = response.data
//     console.log(phonebook)
// })

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    // console.log("effect");
    nameService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const addName = (event) => {
    event.preventDefault();

    const namesOnly = persons.map((person) => person.name?.toLowerCase());

    let capName = newName.charAt(0).toUpperCase() + newName.slice(1);

    const nameObject = {
        name: capName,
        number: phoneNumber,
        };
    
    if (namesOnly.includes(newName.toLowerCase())) {
        console.log(newName, phoneNumber, "already added");
        
        console.log(nameObject);

        
        
        
      return;
    }

    else {
        console.log("this should not be printing");
        

        nameService.create(nameObject).then((returnedPerson) => {
        
        setPersons(persons.concat([returnedPerson]));
        
        setNotification(`Added ${capName} to the phonebook`);
        setTimeout(() => {
            setNotification(null);
        }, 4000);

        setNewName("");
        setPhoneNumber("");
        });


    } 
    
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      nameService.deletePerson(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
    return;
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Notification message={notification} />
      <Search value={search} onChange={handleSearchChange} />
      <h2>add a new</h2>
      <Form
        newName={newName}
        handleNameChange={handleNameChange}
        phoneNumber={phoneNumber}
        handlePhoneChange={handlePhoneChange}
        addName={addName}
      />
      <h2>Numbers</h2>

      <ul>
        {persons.length === 0 ? (
          <p>this phonebook looks empty, add new contacts!</p>
        ) : (
          persons
            ?.filter(
              (person) =>
                person &&
                person.name &&
                person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(
              (person) =>
                person && ( // this is a conditional check to wait for the data to fetch before rendering
                  <DisplayContact
                    key={person.id}
                    person={person}
                    handleDelete={handleDelete}
                  />
                )
            )
        )}
      </ul>

      <Footer />
    </div>
  );
}

export default App;
