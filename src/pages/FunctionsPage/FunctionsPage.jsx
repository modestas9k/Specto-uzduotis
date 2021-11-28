import React, { useEffect, useState } from 'react';
import './FunctionsPage.css';
import { ReactComponent as AddPeople } from '../../assets/addPeople.svg';
import { ReactComponent as AddFirm } from '../../assets/addFirm.svg';
import { ReactComponent as Print } from '../../assets/print.svg';
import { ReactComponent as Idea } from '../../assets/idea.svg';
import { ReactComponent as Computer } from '../../assets/computer.svg';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as Loading } from '../../assets/time.svg';
import { ActionButton, AsideMenu, ClientsTable, Footer, Search, Wrapper } from '../../components/';

const clientsExampleData = [
    {
        id: 1,
        name: 'Vardenis',
        surname: 'Pavardenis',
        city: 'Kaunas',
        cardNumber: 23235323,
        ID: 1233213213,
        personalCode: 34490432432,
        bornDate: 1920,
        phone1: '+370 000 00000',
        phone2: '+370 000 00000',
    },
    {
        id: 2,
        name: 'Vardenis2',
        surname: 'Pavardenis2',
        city: 'Kaunas',
        cardNumber: 23235323,
        ID: 1233213213,
        personalCode: 34490432432,
        bornDate: 1923,
        phone1: '+370 000 00000',
        phone2: '+370 000 00000',
    },
];

function FunctionsPage() {
    const [client, setClient] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [clientsData, setClientsData] = useState('');

    const [loadingClient, setLoadingClient] = useState(false);

    const selectedClient = (childData) => {
        const client = clientsExampleData.filter((client) => client.id === childData);
        setClient(client);
    };
    const searchInputData = (childData) => {
        setSearchValue(childData);
    };
    useEffect(() => {
        setLoadingClient(true);
        const timer = setTimeout(() => {
            setLoadingClient(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [client]);

    useEffect(() => {
        if (searchValue) {
            const results = clientsExampleData.filter((client) =>
                client.name.toLowerCase().includes(searchValue)
            );
            setClientsData(results);
        } else {
            setClientsData(clientsExampleData);
        }
    }, [searchValue]);

    return (
        <div className="main-container">
            <AsideMenu />

            <div className="main-view">
                <div>
                    <div className="top-buttons-wrapper">
                        <ActionButton Icon={AddPeople} tooltip="Naujas žmogus" />
                        <ActionButton Icon={AddFirm} tooltip="Nauja įmonė" />
                        <ActionButton Icon={Print} tooltip="Atspausdinti" />
                        <ActionButton Icon={Idea} tooltip="Daugiau informacijos" />
                        <ActionButton Icon={Computer} tooltip="Nustatymai" />
                        <ActionButton Icon={Back} tooltip="Atgal" />
                    </div>

                    <Wrapper title="Kliento paieška">
                        <div>
                            <Search searchInputData={searchInputData} />

                            <ClientsTable clients={clientsData} selectedClient={selectedClient} />
                        </div>
                    </Wrapper>
                    {loadingClient && client ? (
                        <div className="loading">
                            <div>
                                <span>Informacija kraunasi</span>
                                <Loading className="loading__icon" />
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    {client &&
                        loadingClient == false &&
                        client.map((client) => {
                            return (
                                <Wrapper key={client.id} title={`${client.name} ${client.surname}`}>
                                    <div className="client-wrapper">
                                        <div className="client">
                                            <h4>Svarbi informacija</h4>
                                            <div className="client__info">
                                                <div className="">
                                                    <h5>
                                                        Neatvyko po užsakymo patvirtinimo:{' '}
                                                        <span className="client__info--span">
                                                            0
                                                        </span>{' '}
                                                        kartai
                                                    </h5>
                                                </div>
                                                <div>
                                                    <ActionButton Icon={Info} />
                                                    <ActionButton Icon={Info} />
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
                                </Wrapper>
                            );
                        })}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default FunctionsPage;
