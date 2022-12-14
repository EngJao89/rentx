import React, { useState } from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useNetInfo } from '@react-native-community/netinfo'

import * as ImagePicker from 'expo-image-picker'
import * as Yup from 'yup'
import * as S from './styles'

import { Feather } from '@expo/vector-icons'
import { useAuth } from '../../Hooks/Auth/auth'
import { useHooks } from '../../Hooks/useHooks'

import { BackButton } from '../../components/BackButton'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { PasswordInput } from '../../components/PasswordInput'
import { Spacer } from '../../components/Spacer'

export function Profile() {
  const { user, signOut, updatedUser } = useAuth()
  const netInfo = useNetInfo()
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')
  const [avatar, setAvatar] = useState(user.avatar)
  const [name, setName] = useState(user.name)
  const [driverLicense, setDriveLicense] = useState(user.driver_license)

  const { theme, navigation } = useHooks()

  function handleBack() {
    navigation.goBack()
  }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    if (netInfo.isConnected === false && optionSelected === 'passwordEdit') {
      Alert.alert('Você está Offline', 'Para mudar a senha, conecte-se a Internet')
    } else {
      setOption(optionSelected)
    }
  }

  async function handleAvatarSelect() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    })

    if (result.cancelled) {
      return
    }

    if (result.uri) {
      setAvatar(result.uri)
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH é obrigatória'),
        name: Yup.string().required('Nome é obrigatório')
      })

      const data = { name, driverLicense }
      await schema.validate(data)

      await updatedUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token
      })
      Alert.alert('Perfil atualizado!')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert('Não foi possível atualizar o perfil')
      }
    }
  }

  async function handleSignOut() {
    Alert.alert(
      'Tem certeza?',
      'Se você sair, irá precisar de internet para conectar-se novamente ',
      [
        {
          text: 'Cancelar',
          onPress: () => {}
        },
        {
          text: 'Sair',
          onPress: () => signOut()
        }
      ]
    )
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <S.HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleBack} />
              <S.HeaderTitle>Editar Perfil</S.HeaderTitle>
              <S.LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={theme.colors.shape} />
              </S.LogoutButton>
            </S.HeaderTop>
            <S.PhotoContainer>
              {!!avatar && <S.Photo source={{ uri: avatar }} />}
              <S.PhotoButton onPress={handleAvatarSelect}>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </S.PhotoButton>
            </S.PhotoContainer>
          </S.Header>

          <S.Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <S.Options>
              <S.Option
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <S.OptionTitle active={option === 'dataEdit'}>Dados</S.OptionTitle>
              </S.Option>
              <S.Option
                active={option === 'passwordEdit'}
                onPress={() => handleOptionChange('passwordEdit')}
              >
                <S.OptionTitle active={option === 'passwordEdit'}>Trocar senha</S.OptionTitle>
              </S.Option>
            </S.Options>

            {option === 'dataEdit' ? (
              <S.Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  defaultValue={user.name}
                  onChangeText={setName}
                />

                <Spacer />

                <Input iconName="mail" editable={false} defaultValue={user.email} />

                <Spacer />

                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                  onChangeText={setDriveLicense}
                />
              </S.Section>
            ) : (
              <S.Section>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <Spacer />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <Spacer />
                <PasswordInput iconName="lock" placeholder="Repetir senha" />
              </S.Section>
            )}
            <Spacer />
            <Button title="Salvar alterações" onPress={handleProfileUpdate} />
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}