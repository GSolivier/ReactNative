import styled from "styled-components/native";
import { APP_COLORS } from "../settings/Colors";

export const ContainerTitle = styled.SafeAreaView`
    flex: 0.7;
    align-items: center;
    justify-content: center;
    background-color: ${APP_COLORS.yellow};
    elevation: 15px;
    border-radius: 20px;
`


export const ContainerContents = styled.ScrollView`
    flex: 3;
    height: 80%;
    background-color: ${APP_COLORS.white};
    padding: 30px;
`
