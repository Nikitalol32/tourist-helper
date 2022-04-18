describe('Главная страница', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	describe('Переход на /city-choose', () => {
		beforeEach(() => {
			cy
				.contains('Поездка по городам')
				.click()
		})

		it('Отображается заголовок', () => {
			cy.contains('Выберите город')
		})

		it('Отображается раздел Москва', () => {
			cy
				.get('input')
				.type('Москва')
		})

		describe('Переход на /process-buying', () => {
			it('Написал в input Москва', () => {
				cy
					.get('input')
					.type('Москва')
			})

			it('Написал в input Сочи', () => {
				cy
					.get('input')
					.type('Сочи')
			})

			it('Написал в input Екатеринбург', () => {
				cy
					.get('input')
					.type('Екатеринбург')
			})

			afterEach(() => {
				cy
					.get('.viewable:first .cities-container__slider-item:first')
					.click()
			})
		})
	})
})
