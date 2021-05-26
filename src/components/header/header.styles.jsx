import styled,{css} from 'styled-components'
import {Link} from 'react-router-dom'


const cssOption = css`
    padding: 10px 15px;
    cursor: pointer;
`


export const DivHeader = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LinkLogoContainer = styled(Link)`
    height: 60%;
    width: 50px;
    padding: 25px;
`

export const DivOptions = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const LinkOption = styled(Link)`
    ${cssOption}
`

export const DivOption = styled.div`
    ${cssOption}
`