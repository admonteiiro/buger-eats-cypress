
import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    beforeEach(function () {
        cy.fixture('entregador').then((e) => {
            this.entregador = e
        })
    })

    it('Usuário deve se tornar um entregador', function () {

        signup.go()
        signup.fillForm(this.entregador.signup)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF inválido', function () {

        signup.go()
        signup.fillForm(this.entregador.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})