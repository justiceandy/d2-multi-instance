
import './FormLabels.css';
export default function FormLabels ({ items }:any) {
    return (
        <div className="ui-form-labels">
            <ul>
                { items ? 
                    items.map((i:string) => <li>{i}</li>)
                : null
                }
            </ul>
        </div>
    )
}