import './PageHeader.css';
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js';
import { Link } from 'react-router-dom';

const singleNameHeader = ({ breadcrumbs, icons }:any) => {
    console.log(icons)
    return (
        <div className="ui-page-header-single-title"><label>{breadcrumbs[0]}</label></div>
    )
}

const nestedNameHeader = ({ breadcrumbs, icons }:any) => {
    console.log(icons)
    const nestedItem = ({ item, index }:any) => {
        return (
            <div>
                 { index > 0  ?  
                    <div>
                        <Icon 
                            className="chevIcon" 
                            path={mdiChevronRight}
                            title="Home" 
                            size={1} />
                    </div>
                  : null
                }
                <label>{item}</label>
            </div>
        )
    }
    return (
        <div>
            {/* @ts-expect-error */
            breadcrumbs.map((item, index):any => nestedItem({ item, index }))}
        </div>
    )
}

const pageIcon = ({ icon, title, onClick }:any) => {
    return (
        <Link to="#" onClick={onClick}>
            <Icon 
                className="MenuAddIcon" 
                path={icon}
                title={title}
                size={1} 
            />
        </Link>
    )
}


export default function PageHeader ({ breadcrumbs = [], icons = [] }:any) {
    return (
        <div className="ui-page-header">
            <h1>
            {
                breadcrumbs.length > 1
                 ? nestedNameHeader({ breadcrumbs, icons }) 
                 : singleNameHeader({ breadcrumbs, icons })
            }
            <div className="ui-page-header-icons">
            {
                icons.map(({ icon, title }:any) => pageIcon({ icon, title }))
            }
            </div>
            </h1>
        </div>
    );
  };