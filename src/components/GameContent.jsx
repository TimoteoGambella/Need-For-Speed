const GameContent = ({ title, text, img, imgNone }) => {
    return (
        <div className="gameContent d-flex-center" style={{opacity:imgNone?0.7:1}}>
            <div className="gameContent-img">{img && <img style={{opacity:imgNone?0:1}} src={img} alt="Car racing"></img>}</div>
            <div className="gameContent-text d-flex-column">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default GameContent;
