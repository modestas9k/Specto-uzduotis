import './ActionButton.css';

export default function ActionButton({ Icon, onClick, tooltip }) {
    return (
        <button tooltip={tooltip} onClick={onClick} className="action-btn">
            <Icon className="action-btn__icon" />
        </button>
    );
}
