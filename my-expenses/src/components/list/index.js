const ExpensesList = ({ expenses }) => {
    return (
        <table width="70%" border="1">
            <thead>
                <tr>
                    <th width="40%">Descrição</th>
                    <th width="20%">Categoria</th>
                    <th width="20%">Data</th>
                    <th width="20%">Valor</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.description}</td>
                        <td>{expense.category}</td>
                        <td>{expense.date}</td>
                        <td>{expense.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ExpensesList;