export default function ExpenseItem({expense}) {
    return (
        <li className="item">
            <div className="itemTitle">
                {expense.title}
            </div>
             <div className="itemMeta">
                {expense.category}
            </div>

            <div className="amount">
                ${expense.amount}
            </div>
        </li>
    )
}