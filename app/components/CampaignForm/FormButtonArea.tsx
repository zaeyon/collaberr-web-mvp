import styled from '@emotion/styled';

import Button from '../Button';

const Container = styled.div`
    margin-top: 40px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`;

interface props {
    changeProgress: (direction: string) => void;
    curProgress: number;
    clickRegisterCampaign: () => void;
    isInvaildForm: boolean;
}

export default function FormButtonArea({changeProgress, curProgress, clickRegisterCampaign, isInvaildForm}: props) {

    return (
        <Container>
            <Button
            onClick={() => changeProgress("prev")}
            label={"Previous"}
            style={"tertiery"}
            size={"small"}
            state={curProgress > 1 ? "default" : "disabled"}
            />
            {curProgress < 4 && (
            <Button
            onClick={() => changeProgress("next")}
            label={"Next"}
            style={"tertiery"}
            size={"small"}
            state={"default"}
            />
            )}
            {curProgress === 4 && (
            <Button
            onClick={() => clickRegisterCampaign()}
            label={"Register"}
            style={"primary"}
            size={"small"}
            state={isInvaildForm ? "disabled" : "default"}
            />
            )}
        </Container>

    )
}