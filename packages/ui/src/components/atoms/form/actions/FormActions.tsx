import { Link } from "react-router-dom"

export default function FormActions({ onClick, text = 'Save'}:any) {
    return (
        <div className="FormAction">
          <Link to="/account/save" onClick={onClick}>{text}</Link>
        </div> 
    )
}