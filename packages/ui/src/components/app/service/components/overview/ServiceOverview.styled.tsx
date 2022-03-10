import styled from "@emotion/styled";


export const StatContainer = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
    
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    height: 255px;
`

export const StatCard = styled.div`
    background: white;
    margin-bottom: 10px;
    background: #ffffff14;
    height: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const StatCardWide = styled(StatCard)`
   grid-column: span 2;
`

export const StatLabel = styled.label`
    padding: 15px;
`

export const StatValue = styled.label`
    padding-top: 1px;
    font-size: 3em;
`
