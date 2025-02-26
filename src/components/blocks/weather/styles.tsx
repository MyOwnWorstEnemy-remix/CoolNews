import styled from "styled-components";

export const Aside = styled.aside`
    position: sticky;
    top: 50px;
    background-color: #dee7ee;
    box-sizing: border-box;
    padding: 30px 40px;
    width: 400px;
    flex-shrink: 0;
    border-radius: 15px;
    box-shadow: 0px 0px 15px -5px #282f2c;
    height: fit-content;
    margin-top: 70px;
`

export const SearchArea = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    
    input {
        outline: none;
        border: none;
        border: 1px solid #a1a1a1;
        padding: 8px;
        border-radius: 20px;
        text-align: center;
        width: 80%;
        background: transparent;
        font-size: 16px;

        &:hover,
        &:focus {
            border: 1px solid #10264c;
        }
    }
`

export const SearchCircle = styled.div`
    border: 1px solid #a1a1a1;
    width: 30px; 
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
        color: #a1a1a1;
        width: 20px;
        height: 20px;
    }

    &:hover {
        border: 1px solid #10264c;

        svg {
            color: #10264c;
        }
    }
`

export const WeatherArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    h2 {
        font-size: 24px;
        margin: 0;
        margin-bottom: 25px;
    }

    svg {
        height: 150px;
        width: 150px;
        margin-bottom: 10px;
    }
`

export const Temp = styled.p`
    font-size: 24px;
    font-weight: 800;
    margin: 0;
    margin-bottom: 10px;
`

export const InfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 10px 20px;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    gap: 10px;

    svg {
        width: 35px;
        height: 35px;
    }

    p {
        font-weight: 600;
        font-size: 20px;
        margin: 0;
        margin-bottom: 5px;
    } 
`

export const Loading = styled.div`
    height: 400px;
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        width: 80px;
        height: 80px;
        animation: spin 2s linear infinite;
    }

    p {
        font-size: 22px;
        margin-top: 10px;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`