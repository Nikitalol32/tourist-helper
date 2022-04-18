import 'cypress-localstorage-commands'

describe('Главная страница', () => {
	beforeEach(() => {
		cy.restoreLocalStorage()
		cy.visit('/')
	})

	it('Отображается заголовок', () => {
		cy.contains('Телефоны служб')
	})

	describe('Переход на /service-numbers', () => {
		beforeEach(() => {
			cy.contains('Телефоны служб').click()
		})

		it('Отображается кнопка добавить', () => {
			cy.get('.services__service-add-number')
		})

		describe('Открыть страницу добавление номера', () => {
			beforeEach(() => {
				cy.get('.services__service-add-number').click()
			})

			afterEach(() => {
				cy.saveLocalStorage()
			})

			it('Отображается input', () => {
				cy.get('.add-number__name .add-number-item__input')
				cy.get('.add-number__number .add-number-item__input')
				cy.get('.add-number__description .add-number-item__input')
			})

			it('Проверка функционирования input', () => {
				cy.get('.add-number__name .add-number-item__input').type('Наименование').should('have.value', 'Наименование')
				cy.contains('Добавить').click()
				cy.get('.add-number__number .add-number-item__input').type('89838942389').should('have.value', '89838942389')
				cy.contains('Добавить').click()
				cy.get('.add-number__description .add-number-item__input').type('Какое-то большое описание').should('have.value', 'Какое-то большое описание')
				cy.contains('Добавить').click()
			})
		})

		describe('Переход на добавленный номер', () => {
			beforeEach(() => {
				cy.get('.services__service-my-number .menu-item-container').click()
			})

			it('Отображается заголовок', () => {
				cy.get('.service-cart__title')
			})
			it('Отображается номер', () => {
				cy.get('.service-cart-number__number')
			})
			it('Отображается описание', () => {
				cy.get('.service-cart__text')
			})
		})
	})
})
