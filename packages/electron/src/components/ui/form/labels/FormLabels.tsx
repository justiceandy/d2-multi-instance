
import './FormLabels.css';
export default function FormLabels ({ items }:any) {

    const renderItem = (item:any, index:number) => {
        if(typeof item === 'object'){
            return (
                <li key={`ui-label-row${index}`} className={item.className || ''}>{item.label}</li>
            )
        }
        return (
            <li key={`ui-label-row${index}`}>{item}</li>
        )
    }
    return (
        <div className="ui-form-labels">
            <ul>
                { items ? 
                    items.map((i:string, index:number) => renderItem(i, index) )
                : null
                }
            </ul>
        </div>
    )
}