import styled from "@emotion/styled";
import { ListManager } from "react-beautiful-dnd-grid";
import { FormControl,InputLabel, Select, MenuItem, Switch } from '@mui/material'
const breakpoints: { [index: string]: number } = {
    sm: 550,
    md: 650,
    lg: 1000,
    xl: 1200,
  };
  
  const mq = Object.keys(breakpoints)
    .map((key) => [key, breakpoints[key]] as [string, number])
    .reduce((prev, [key, breakpoint]) => {
      prev[key] = `@media (min-width: ${breakpoint}px)`;
      return prev;
    }, {} as { [index: string]: string });


export const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    width: 100%;
    box-sizing: border-box;
    background: #1c1c1ccf;
    height: 100%;
`

export const List = styled.ul`
    list-style: none;
    width: 100%;
    margin: auto;
    padding-left: 0px;
    box-sizing: border-box;
    text-align: center;
    align-items: baseline;
    display: flex;
    align-content: stretch;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 10px;
    justify-content: flex-start;
`
export const Grid = styled.div`
    display: grid;
    gap: 0.5rem;
    padding-top: 15px;
    overflow: hidden;
    ${mq["sm"]} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${mq["lg"]} {
        grid-template-columns: repeat(3, 1fr);
    }
`
export const GridListManager = styled(ListManager)`
 
`

export const Grid2 = styled.div`
    [data-react-beautiful-dnd-droppable] { 
        display: grid !important;
        gap: 0.5rem;
        padding-top: 15px;
        ${mq["sm"]} {
            grid-template-columns: repeat(2, 1fr);
        }
        ${mq["lg"]} {
            grid-template-columns: repeat(3, 1fr);
        }

    }
    overflow: hidden;
`

export const GridItem = styled.div`
    list-style: none;
    width: 100%;
    margin: auto;
    padding-left: 0px;
    box-sizing: border-box;
    text-align: center;
    align-items: baseline;
    display: flex;
    align-content: stretch;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
`
export const GridActiveItem = styled.div`
    list-style: none;
    margin-left: 0px;
    padding-right: 10px;
    height: 55px;
    margin-bottom: 11px;
    border-radius: 3px;
    box-sizing: border-box;
    min-width: 50%;
`


export const ListItem = styled.li`
    list-style: none;
    margin-left: 0px;
    padding-right: 10px;
    height: 55px;
    margin-bottom: 11px;
    border-radius: 3px;
    box-sizing: border-box;
    min-width: 50%;
`

export const DragSwitchContainer = styled.div`
    width: 105px;
    background: #0e0e0e;
    color: #8d8d8d;
    font-size: 0.8em;
    text-align: center;
    box-sizing: border-box;
    padding-left: 14px;
`
export const RegionSelectContainer = styled.div`
    color: #8d8d8d;
    display: flex;
    align-items: center;
    label {
        color: #8d8d8d;
        font-size: 0.8em;
        height: 20px;
    }

`

export const RegionMenuItem = styled(MenuItem)`
    background: #121212 !important;

   
    ul {
        background: #121212 !important;
    }

`
export const RegionMenu = styled(Select)`
 

`


export const BlizzLogoImage = styled.img`
    height: 30px;
    padding: 5px;
    border-radius: 4px;
    box-sizing: border-box;
    -webkit-filter: invert(0.5) sepia(1) saturate(5) hue-rotate(
    175deg);
    filter: invert(0.5) sepia(1) saturate(5) hue-rotate(
    175deg);
`
