function Animal(props){
    return (
        <li key={props.animal.id} className="col c-4 l-4 m-12 animal__item">
            <a className="animal__card">
                <img className="animal__image" src={props.animal.imgLink}></img>
                <b className="animal__card-name">{props.animal.animalName}</b>
            </a>
        </li>
    );
}
export default Animal;