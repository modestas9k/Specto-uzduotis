import './Wrapper.css';

export default function Wrapper({ children, title }) {
    return (
        <div className="wrapper">
            <h1>{title}</h1>
            <div className="wrapper__table">{children}</div>
        </div>
    );
}
