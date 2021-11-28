import './AsideMenu.css';

export default function AsideMenu() {
    return (
        <aside className="asside__container">
            <div className="asside__nav">
                <h3>Dienos Funkcijos</h3>
                <ul>
                    <li>Registracija</li>
                    <li className="active-list-item">Kliento Paieška</li>
                    <li>Sąskaitos</li>
                    <li>Kasa</li>
                    <li>Orderiai</li>
                    <li>Medžiagų išdavimas</li>
                </ul>
            </div>
            <div className="asside__nav">
                <h3>Kortelės</h3>
                <ul>
                    <li>Fiziniai klientai</li>
                    <li>Juridiniai klientai</li>
                    <li>Prekių tiekėjai</li>
                    <li>Paslaugos</li>
                    <li>Prekės</li>
                    <li>Darbuotojai</li>
                </ul>
            </div>
        </aside>
    );
}
