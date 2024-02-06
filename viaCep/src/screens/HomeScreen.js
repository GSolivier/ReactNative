import React, { useState } from 'react'
import { ContainerContents, ContainerTitle, KeyboardSafeArea } from '../components/Container'
import { TitleLarge } from '../settings/Fonts'
import Input, { ContainerInput } from '../components/Input'
import { api } from '../settings/AppApi';
import { ConverterEstados } from '../utils/ConverterEstados';
import Toast from 'react-native-toast-message';



export default function HomeScreen() {

  const zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState({})
  const [estado, setEstado] = useState("")


  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Erro ao Encontrar o CEP',
      text2: `O CEP ${cep} não foi encotrado!`
    });
  }

  async function getAdress() {

    try {

      const retorno = await api.get(`${cep}/json`)

      const dados = retorno.data
      setEndereco(dados)

      setEstado(ConverterEstados(dados.uf))
    } catch (error) {
      showToast()
    }
  }


  return (
    <>
      <ContainerTitle>
        <TitleLarge>
          Consumo de API ViaCEP
        </TitleLarge>
      </ContainerTitle>
      <ContainerContents contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Input
          id={"cep"}
          value={cep}
          label={'Informar CEP'}
          placeholder={'Digite seu CEP'}
          keyboardType='number-pad'
          maxLength={9}
          isMasked={true}
          isEditable={true}
          onTextEditing={(masked, unmasked) => {
            setCep(unmasked);
          }}
          mask={zipCodeMask}
          onEndEdit={() => getAdress()}
        />
        <Input label={'Logradouro'} placeholder={'Ex: Avenida Paulista'} value={endereco.logradouro} />
        <Input label={'Bairro'} placeholder={'Ex: Jardim Paulista'} value={endereco.bairro} />
        <Input label={'Cidade'} placeholder={'Ex: São Paulo'} value={endereco.localidade} />
        <ContainerInput>
          <Input label={'Estado'} isCompact={true} placeholder={'Ex: São Paulo'} value={estado} />
          <Input label={'UF'} isAcronym={true} placeholder={'Ex: SP'} maxLength={2} value={endereco.uf} />
        </ContainerInput>
      </ContainerContents>
    </>
  );
}

