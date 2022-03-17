
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {

        var entregador = {
            nome: 'Test',
            cpf: '00000014141',
            email: 'test@gmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'apto 84',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF inválido', () => {

        var entregador = {
            nome: 'Test',
            cpf: '00000014141AA',
            email: 'test@gmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'apto 84',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})