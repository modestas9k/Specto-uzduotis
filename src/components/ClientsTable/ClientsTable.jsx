import './ClientsTable.css';

export default function ClientsTable({ clients, selectedClient }) {
    return (
        <table className="clients-table">
            <thead>
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
            </thead>
            <tbody>
                {clients &&
                    clients.map((client) => {
                        return (
                            <tr
                                key={client.id}
                                className="client-table__client-row"
                                onClick={() => selectedClient(client.id)}
                            >
                                <td>{client.name}</td>
                                <td>{client.surname}</td>
                                <td>{client.city}</td>
                                <td>{client.cardNumber}</td>
                                <td>{client.ID}</td>
                                <td>{client.personalCode}</td>
                                <td>{client.bornDate}</td>
                                <td>{client.phone1}</td>
                                <td>{client.phone2}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}
