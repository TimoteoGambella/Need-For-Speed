const GameContent = ({ title, text, img }) => {
    return (
        <div className="gameContent d-flex-center">
            <div className="gameContent-img">{img && <img src={img} alt="Car racing"></img>}</div>
            <div className="gameContent-text d-flex-column">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default GameContent;
