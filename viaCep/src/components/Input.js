import styled from "styled-components/native";
import { APP_COLORS } from "../settings/Colors";
import { Label } from "../settings/Fonts";
import MaskInput from "react-native-mask-input";

export const AppInput = styled.TextInput`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border-color: ${APP_COLORS.gray};
    border-width: 2px;
    font-family: 'Roboto_500Medium';
    font-size: 18px;
`
export const AppInputMask = styled(MaskInput)`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border-color: ${APP_COLORS.gray};
    border-width: 2px;
    font-family: 'Roboto_500Medium';
    font-size: 18px;
`

export const InputBox = styled.View`
    align-items: flex-start;
    width: ${({ isAcronym = false, isCompact = false }) => isCompact == true ? '64%' : isAcronym == true ? '30%' : '100%'};
    gap: 10px;
`

export const ContainerInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export default function Input({
    id,
    label,
    isCompact = false,
    isAcronym = false,
    placeholder,
    keyboardType = "default",
    maxLength = 100,
    isMasked = false,
    onTextEditing = null,
    value = "",
    mask = isMasked == true ? mask : null,
    isEditable = false,
    onEndEdit = isMasked == true ? onEndEdit : null
}) {
    return (
        <InputBox isCompact={isCompact} isAcronym={isAcronym}>
            <Label>
                {label}
            </Label>
            {isMasked == false ? <AppInput id={id}
                isCompact={isCompact}
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={APP_COLORS.gray}
                maxLength={maxLength}
                editable={isEditable}
                value={value}
            /> : <AppInputMask id={id}
                isCompact={isCompact}
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={APP_COLORS.gray}
                maxLength={maxLength}
                onChangeText={onTextEditing}
                value={value}
                mask={mask}
                editable={isEditable}
                onEndEditing={onEndEdit}
            />}


        </InputBox>
    );
}