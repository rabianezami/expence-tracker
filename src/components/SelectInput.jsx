
export default function SelectInput({ label, value, onChange, options }) {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input"
            >
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}