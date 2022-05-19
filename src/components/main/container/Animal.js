function Animal(props){
    let link = props.animal.imgLink2;
    let name = props.animal.animalName
    let setLocalStorage = () => {
        localStorage.setItem("linkToken", link);
        localStorage.setItem("nameAnimalToken", name);
    }
    return (
        <li key={props.animal.id} className="col c-4 l-4 d-6 m-12 animal__item">
            <a onClick={setLocalStorage} href="/Detail" className="animal__card">
                <img className="animal__image" src={props.animal.imgLink} alt="Animal"></img>
                <b className="animal__card-name">{name}</b>
            </a>
        </li>
    );
}
export default Animal;