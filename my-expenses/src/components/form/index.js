import { useState } from "react"

const ExpensesForm = ({ onSave}) => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')

    const save = () => {
        const expense = {
            description,
            value,
            date,
            category,
        }

        onSave(expense)
        clearForm()
    }

    const clearForm = () => {
        setDescription('')
        setValue('')
        setDate('')
        setCategory('')
    }

    return(
        <>
            Descrição: <br />
            <input type="text" size="35" value={description}
                onChange={event => setDescription(event.target.value)} />
            <div></div>

            <br />

            Data: <br />
            <input type="date" value={date}
                onChange={event => setDate(event.target.value)} />
            <div></div>

            <br />

            Valor: <br />
            <input type="text" value={value}
                onChange={event => setValue(event.target.value)} />
            <div></div>

            <br />

            Categoria: <br />
            <select value={category} onChange={event => setCategory(event.target.value)}>
                <option value=""></option>
                <option value="Alimentação">Alimentação</option>
                <option value="Vestuário">Vestuário</option>
                <option value="Utilidades">Utilidades</option>
                <option value="Transporte">Transporte</option>
                <option value="Entretenimento">Entretenimento</option>
            </select>
            <div></div>

            <br />
            <input type="button" value="Salvar" onClick={save} /> &nbsp;
            <input type="button" value="Cancelar" onClick={clearForm} />
        </>
    )
}

export default ExpensesForm;