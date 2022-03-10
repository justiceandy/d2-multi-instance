import {
    FormLabelList as List,
    FormLabelContainer as Container,
    FormLabelListItem as Item,
 } from './FormLabels.styled'

export default function FormLabels ({ items, children }:any) {

    const renderItem = (item:any, index:number) => {
        if(typeof item === 'object'){
            return (
                <Item key={`ui-label-row${index}`} className={item.className || ''}>{item.label}</Item>
            )
        }
        return (
            <Item key={`ui-label-row${index}`}>{item}</Item>
        )
    }
    return (
        <Container>
            { children || null }
            <List>
                { items ? 
                    items.map((i:string, index:number) => renderItem(i, index) )
                    : null }
            </List>
        </Container>
    )
}
