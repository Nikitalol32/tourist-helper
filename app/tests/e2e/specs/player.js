describe('Главная страница', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	describe('Выполнил переход на /сatalog', () => {
		beforeEach(() => {
			cy.get('[href="/catalog"]').click()
		})

		it('Отображается заголовки каталога', () => {
			cy.contains('.catalog__slider-title:first', 'Архитектура')
		})

		describe('Выполнил переход на /cart-catalog', () => {
			beforeEach(() => {
				cy.get('.catalog-item:first').click()
			})

			it('Отображается кнопка "В путь"', () => {
				cy.contains('.btn', 'В путь')
			})
			// Блятб, как работает ':contains("")'?? idk
			describe('Выполни переход на /step-cart', () => {
				beforeEach(() => {
					cy.get('[type="inWays"]').click()
				})

				it('Отображаются треки', () => {
					cy.contains('.music__title', 'Берегите природу')
					cy.contains('.music__title', 'Сиська-перда')
					cy.contains('.music__title', 'Не могу стоять')
					cy.contains('.music__title', 'Нечто важное!')
				})

				beforeEach(() => {
					cy.get('.music__button-play:first').click()
				})

				describe('Открыл Player', () => {
					beforeEach(() => {
						cy.get('.music__titles:first').click()
					})
					it('Начинается проигрование музыки', () => {
						cy.get('.player__buttons_playing').click()
						cy.get('.player__buttons_paused').click()
					})

					it('Воспроизводится следующее аудио', () => {
						cy.get('.player__buttons_next').click().click()
					})
					it('Воспроизводится предыдущее аудио', () => {
						cy.get('.player__buttons_prev').click().click()
					})

					describe('Закрыл Player', () => {
						beforeEach(() => {
							cy.get('.player .header__button-back').click()
						})

						it('Проверяю есть ли заголовок', () => {
							cy.get('.step-cart__title')
						})
					})
				})
			})
		})
	})
})
