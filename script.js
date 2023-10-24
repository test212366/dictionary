const form = document.getElementById('form'),
	inputWord = document.getElementById('word'),
	inputTranslate = document.getElementById('translate'),
	itemsAllDom = document.querySelector('.items')

const allWordsLC = localStorage.getItem('allWords')

let allWords = []

if (allWordsLC) {
	allWords = JSON.parse(allWordsLC)
}
checkOnWords()

form.addEventListener('submit', e => {
	e.preventDefault()
	checkOnWords()
})
function checkOnWords() {
	if (inputWord.value) {
		let word = inputWord.value
		let translate = inputTranslate.value
		allWords.push({ wordItem: word, translateItem: translate })
		inputWord.value = ''
		inputTranslate.value = ''
		createAllWords(allWords)
		addToLocalStorage(allWords)
	} else {
		createAllWords(allWords)
	}


}
function createAllWords(array) {
	array.forEach(item => {
		const element = document.createElement('div')
		element.classList.add('item')
		element.insertAdjacentHTML('afterbegin', `
				<div class="word">${item.wordItem}</div>
				<div class="word-translate">${item.translateItem}</div>
				<button class="btn" id="deleteItem">&times;</button>
		`)
		itemsAllDom.appendChild(element)

	})
}
function addToLocalStorage(array) {
	let temp = JSON.stringify(array)
	localStorage.setItem('allWords', temp)
}