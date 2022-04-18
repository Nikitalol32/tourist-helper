describe('Главная страница', () => {
	beforeEach(() => {
		cy
			.visit('/')
	})

	describe('Переход на /Situations', () => {
		beforeEach(() => {
			cy
				.visit('/situations')
		})

		it('Отображается заголовок', () => {
			cy
				.contains('Выберите ситуацию')
		})

		it('Отображаются container-item', () => {
			cy
				.get('.situations__container-item')
		})

		describe('Переход на /Phrase', () => {
			beforeEach(() => {
				cy
					.get('.situations__container-item:first')
					.click()
			})

			it('Отображается заголовок', () => {
				cy
					.contains('Список фраз')
			})

			it('Проверка наличия input', () => {
				cy
					.get('input')
			})

			it('Проверка наличия фраз', () => {
				cy
					.get('.phrases__phrase-text')
			})

			describe('Переход на фразы', () => {
				it('Написал в input "I want call taxi"', () => {
					cy
						.get('input')
						.type('I want call taxi')
						.should('have.value', 'I want call taxi')
				})

				it('Проверяем работу input "I want call Diablo"', () => {
					cy
						.get('input')
						.type('I want call Diablo')
						.should('have.value', 'I want call Diablo')
				})

				afterEach(() => {
					cy
						.get('.viewable:first .phrases__phrase-text')
						.click()
				})
			})
		})
	})
})
