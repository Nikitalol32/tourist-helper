// https://docs.cypress.io/api/introduction/api.html

describe('Главная страница', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Отображается телефоны служб', () => {
		cy.contains('body', 'Телефоны служб')
	})

	it('Отображается маршруты прогулок', () => {
		cy.contains('body', 'Маршруты прогулок')
	})

	describe('Выполнил переход на /service-numbers', () => {
		beforeEach(() => {
			cy.get('.menu-item:first').click()
		})

		it('Обновляется URL', () => {
			cy.url().should('include', '/service-numbers')
		})

		it('Правильный заголовок', () => {
			cy.contains('.header__title', 'Телефончики служб')
		})

		it('Отображается заголовки служб', () => {
			cy.contains('.services__service_medicine .services__service-title', 'Медицина')
			cy.contains('.services__service_cops .services__service-title', 'Полиция')
		})
	})

	describe('Выполнил переход на /сatalog', () => {
		beforeEach(() => {
			cy.get('[href="/catalog"]').click()
		})
		it('Отображается заголовки каталога', () => {
			cy.contains('.catalog__slider-title:first', 'Архитектура')
		})
	})
})
