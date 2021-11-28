import './FunctionsPage.css';
import { ReactComponent as AddPeople } from '../../assets/addPeople.svg';
import { ReactComponent as AddFirm } from '../../assets/addFirm.svg';
import { ReactComponent as Print } from '../../assets/print.svg';
import { ReactComponent as Idea } from '../../assets/idea.svg';
import { ReactComponent as Computer } from '../../assets/computer.svg';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as World } from '../../assets/world.svg';

function FunctionsPage() {
    return (
        <div className="main-container">
            <asside className="asside__container">
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
            </asside>

            <main className="main-view">
                <div className="top-buttons-wrapper">
                    <a>
                        <div className="svg-wrapper">
                            <AddPeople className="svg" />
                        </div>
                    </a>
                    <a>
                        <div className="svg-wrapper">
                            <AddFirm className="svg" />
                        </div>
                    </a>
                    <a>
                        <div className="svg-wrapper">
                            <Print className="svg" />
                        </div>
                    </a>
                    <a>
                        <div className="svg-wrapper">
                            <Idea className="svg" />
                        </div>
                    </a>
                    <a>
                        <div className="svg-wrapper">
                            <Computer className="svg" />
                        </div>
                    </a>
                    <a>
                        <div className="svg-wrapper">
                            <Back className="svg" />
                        </div>
                    </a>
                </div>
                <div className="wrapper">
                    <h1>Kliento paieška</h1>
                    <div className="client-search-table">
                        {/* Search Input */}
                        <div>
                            <input
                                id="search"
                                className="search-input"
                                type="search"
                                placeholder="Kliento paieška"
                            />
                        </div>
                        {/* Clients Table */}
                        <table className="clients-table">
                            <tr>
                                <th>Vardas</th>
                                <th>Pavardė</th>
                                <th>Miestas</th>
                                <th>Kortelės NR</th>
                                <th>Kliento ID</th>
                                <th>Asmens kodas</th>
                                <th>Gimes</th>
                                <th>Telefono nr. 1</th>
                                <th>Telefono nr. 2</th>
                            </tr>
                            <tr>
                                <td>Vardenis</td>
                                <td>Pavardenis</td>
                                <td>Kaunas</td>
                                <td>21 V00001</td>
                                <td>0000000000</td>
                                <td>00000000000</td>
                                <td>1974</td>
                                <td>+370 000 00000</td>
                                <td>+370 000 00000</td>
                            </tr>
                            <tr className="client-table__client-row">
                                <td>Vardenis</td>
                                <td>Pavardenis</td>
                                <td>Kaunas</td>
                                <td>21 V00001</td>
                                <td>0000000000</td>
                                <td>00000000000</td>
                                <td>1974</td>
                                <td>+370 000 00000</td>
                                <td>+370 000 00000</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="wrapper">
                    <h1>Vardenis Pavardenis</h1>
                    <div className="client-search-table client-wrapper">
                        <div className="client">
                            <h4>Svarbi informacija</h4>
                            <div className="client__info">
                                <div className="">
                                    <h5>
                                        Neatvyko po užsakymo patvirtinimo: <span>0</span> kartai
                                    </h5>
                                </div>
                                <div>
                                    <a>
                                        <div className="svg-wrapper">
                                            <Info className="svg" />
                                        </div>
                                    </a>
                                    <a>
                                        <div className="svg-wrapper">
                                            <Info className="svg" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="client__menu">
                            <h4>Kortelė</h4>
                            <ul>
                                <li>Bendra informacija</li>
                                <li>Užsakymai</li>
                                <li>Gydytojo įrašai</li>
                                <li>Gydymo planai</li>
                                <li>Nuotraukos</li>
                                <li>Receptai</li>
                                <li>Injekcijos</li>
                                <li>TLK</li>
                                <li>Svarbi informacija</li>
                                <li>SMS nustatymai</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer>
                    <div>
                        <Logo className="footer__logo" />
                        <div className="footer__links">
                            <a href="#">Privatumo politika</a>
                            <span>|</span>
                            <a href="#">Teisinės nuostatos</a>
                            <span>|</span>
                            <a href="#">Pagalba ir kontaktai</a>
                        </div>
                    </div>
                    <div>
                        <button className="language-btn">
                            <World className="language-btn__svg" /> Lietuvių
                        </button>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default FunctionsPage;
