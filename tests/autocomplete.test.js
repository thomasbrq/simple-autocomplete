const Autocomplete = require("../src/autocomplete");

describe('Simple autocomplete', () => {
  describe('add', () => {
    it('should add a word to the trie', () => {
      const autocomplete = new Autocomplete();
      autocomplete.add('hello');
      expect(autocomplete.search('hello')).toEqual(['hello']);
    });

    it('should add multiple words to the trie', () => {
      const autocomplete = new Autocomplete();
      autocomplete.add('hello');
      autocomplete.add('world');
      expect(autocomplete.search('h')).toEqual(['hello']);
      expect(autocomplete.search('w')).toEqual(['world']);
    });
  });

  describe('search', () => {
    it('should return an empty array if no words match the prefix', () => {
      const autocomplete = new Autocomplete(['hello', 'world']);
      expect(autocomplete.search('foo')).toEqual([]);
    });

    it('should return an array of words that match the prefix', () => {
      const autocomplete = new Autocomplete(['hello', 'world']);
      expect(autocomplete.search('h')).toEqual(['hello']);
      expect(autocomplete.search('w')).toEqual(['world']);
    });

    it('should return an array of words that match the prefix, even if the prefix is a word in the trie', () => {
      const autocomplete = new Autocomplete(['hello', 'world']);
      expect(autocomplete.search('hello')).toEqual(['hello']);
    });
  });
});