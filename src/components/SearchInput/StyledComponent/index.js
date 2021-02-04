import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    background-color: var(--background-color-dark);
    border-radius: 8px;
    padding-left: 16px;
    color: var(--text-secondary);
`

export const Input = styled.input`
 border: none;
    background-color: transparent;
    padding: 16px;
    width: 100%;
    height: 100%;
    outline: none;

    &::placeholder {
        color: var(--text-secondary);
    }
`