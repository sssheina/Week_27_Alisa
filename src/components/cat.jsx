import './cat.scss';

function Cat(props) {
    return (
        <div className="cat-card">
        <img className="cat-pic" src={props.img} alt="cat"></img>
        <div className="cat-name">{props.name}</div>
        <div className="cat-text">Центральное понятие в React – компонент. Вся остальная функциональность построена вокруг него</div>
        <div className="cat-text">{props.text}</div>
        <button className="cat-button">Взять домой</button>
    </div>
    );
}

export default Cat;