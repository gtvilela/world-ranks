import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    @media(min-width: 720px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;

}
`

export const ContainerLeft = styled.div`
    @media(min-width: 720px) {
        grid-column: 1 / span 4;
    }
`

export const ContainerRight = styled.div`
    @media(min-width: 720px) {
        grid-column: 5 / span 8;
    }
`

export const OverviewPanel = styled.div`
    padding: 20px;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    background-color: var(--background-color-light);

`

export const FlagImg = styled.img`
    width: 100%;
        border-radius: 4px;
`

export const OverviewName = styled.h1`
    text-align: center;
    font-size: 32px;
    margin-bottom: 0;
`
export const OverviewRegion = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    margin-top: 4px;
    margin-bottom: 24px;
`

export const OverviewNumber = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    text-align: center;
`

export const OverviewLabel = styled.div`
    font-size: 14px;
    color: var(--text-secondary);
`

export const DetailsPanel = styled.div`
    background-color: var(--background-color-light);
    box-shadow: var(--box-shadow);
    border-radius: 8px;
`

export const DetailsPanelHeading = styled.h4`
    padding: 20px;
    padding-bottom: 0;

    margin: 0; 
`

export const DetailsPanelRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
`

export const DetailsPanelLabel = styled.div`
    color: var(--text-secondary);
`

export const DetailsPanelBorders = styled.div`
    padding: 20px;
`

export const DetailsPanelBordersLabel = styled.div`
    color: var(--text-secondary);
    margin-bottom: 20px;
`

export const DetailsPanelBordersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 24px;
`

export const DetailsPanelBordersCountry = styled.div`
    width: 100%;
    border-radius: 4px;
`

export const DetailsPanelBordersCountryFlag = styled.img`
    width: 100%;
`