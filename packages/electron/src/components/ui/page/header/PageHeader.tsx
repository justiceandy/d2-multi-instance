import './PageHeader.css';

const singleNameHeader = ({ name, icons }:any) => {
    console.log(icons)
    return (
        <h1>{name}</h1>
    )
}

const nestedNameHeader = ({ breadcrumbs, icons }:any) => {
    console.log(icons)
    return (
        <h1>
            {breadcrumbs.map((i:any) => <label>{i}</label>)}
        </h1>
    )
}
export default function PageHeader ({ name, breadcrumbs = [], icons = [] }:any) {
    return (
        <div className="ui-page-header">
            {
                breadcrumbs.length 
                 ? nestedNameHeader({ breadcrumbs, icons }) 
                 : singleNameHeader({ name, icons })
            }
        </div>
    );
  };