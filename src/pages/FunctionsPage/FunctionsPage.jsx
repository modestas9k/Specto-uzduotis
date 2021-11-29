import React, { useEffect, useState } from 'react';
import './FunctionsPage.css';
import { ReactComponent as AddPeopleIcon } from '../../assets/addPeople.svg';
import { ReactComponent as AddFirmIcon } from '../../assets/addFirm.svg';
import { ReactComponent as PrintIcon } from '../../assets/print.svg';
import { ReactComponent as IdeaIcon } from '../../assets/idea.svg';
import { ReactComponent as ComputerIcon } from '../../assets/computer.svg';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';
import { ReactComponent as LoadingIcon } from '../../assets/time.svg';
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
        name: 'Lukas',
        surname: 'Rasytojas',
        city: 'Vilnius',
        cardNumber: 33235323,
        ID: 4333213213,
        personalCode: 34490532432,
        bornDate: 1955,
        phone1: '+370 000 00000',
        phone2: '+370 000 00000',
    },
    {
        id: 3,
        name: 'Tomas',
        surname: 'Vairuotojas',
        city: 'Klaipeda',
        cardNumber: 55235323,
        ID: 9933213213,
        personalCode: 36490532432,
        bornDate: 1966,
        phone1: '+370 000 00000',
        phone2: '+370 000 00000',
    },
    {
        id: 4,
        name: 'Vytautas',
        surname: 'Virejas',
        city: 'Taurage',
        cardNumber: 33238823,
        ID: 4333219913,
        personalCode: 34490772432,
        bornDate: 1945,
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
        setSearchValue(childData.toLowerCase());
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
            const results = clientsExampleData.filter(
                (client) =>
                    client.name.toLowerCase().includes(searchValue) ||
                    client.surname.toLowerCase().includes(searchValue) ||
                    client.city.toLowerCase().includes(searchValue) ||
                    client.cardNumber.toString().includes(searchValue) ||
                    client.ID.toString().includes(searchValue) ||
                    client.personalCode.toString().includes(searchValue) ||
                    client.bornDate.toString().includes(searchValue)
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
                        <ActionButton Icon={AddPeopleIcon} tooltip="Naujas žmogus" />
                        <ActionButton Icon={AddFirmIcon} tooltip="Nauja įmonė" />
                        <ActionButton Icon={PrintIcon} tooltip="Atspausdinti" />
                        <ActionButton Icon={IdeaIcon} tooltip="Daugiau informacijos" />
                        <ActionButton Icon={ComputerIcon} tooltip="Nustatymai" />
                        <ActionButton Icon={BackIcon} tooltip="Atgal" />
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
                                <LoadingIcon className="loading__icon" />
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    {client &&
                        loadingClient === false &&
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
                                                    <ActionButton
                                                        Icon={InfoIcon}
                                                        tooltip="Informacija"
                                                    />
                                                    <ActionButton
                                                        Icon={InfoIcon}
                                                        tooltip="Informacija"
                                                    />
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
