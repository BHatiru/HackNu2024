function ScoreModal({ score, total, onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Your Score: {score} out of {total}</h2>
                <button onClick={() => onClose(true)}>Try Again</button>
                <button onClick={() => onClose(false)}>Change Difficulty</button>
            </div>
        </div>
    );
}

export default ScoreModal;