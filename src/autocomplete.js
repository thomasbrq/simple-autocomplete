class Node {
	constructor() {
		this.childrens = {};
		this.end = false;
	}
}

class Autocomplete {
	constructor(words = []) {
		this.root = new Node();

		for (let word of words) {
			this.add(word);
		}
	}

	/**
	 * Adds a word to the trie data structure.
	 * @param {string} word - The word to be added to the trie.
	 */
	add(word) {
		let current = this.root;

		for (let char of word) {
			if (!current.childrens[char]) {
				current.childrens[char] = new Node();
			}
			current = current.childrens[char];
		}

		current.end = true;
	}

	/**
	 * Recursively gets all words from a given trie node that start with a given prefix.
	 * @private
	 * @param {Object} node - The trie node to start searching from.
	 * @param {string} prefix - The prefix to match words against.
	 * @param {Array} words - An array to store the matched words.
	 */
	#getWords(node, prefix, words) {
		if (node.end) {
			words.push(prefix);
		}

		for (let char in node.childrens) {
			this.#getWords(node.childrens[char], prefix + char, words);
		}
	}

	/**
	 * Searches for words in the trie that start with the given prefix.
	 * @param {string} prefix - The prefix to search for.
	 * @returns {string[]} An array of words that start with the given prefix.
	 */
	search(prefix) {
		let current = this.root;
		let words = [];

		for (let char of prefix) {
			if (!current.childrens[char]) {
				return words;
			}
			current = current.childrens[char];
		}

		this.#getWords(current, prefix, words);

		return words;
	}
}

module.exports = Autocomplete;