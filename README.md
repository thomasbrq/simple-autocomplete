# Simple autocomplete

### Usage

```js
const autocomplete = new Autocomplete(["hello", "hell", "helium"]);

autocomplete.search("hel"); // -> [ "hello", "hell", "helium" ]
autocomplete.search("hell"); // -> [ "hello", "hell" ]

autocomplete.add("hola") // add a new word

autocomplete.search("hol"); // -> [ "hola" ]
autocomplete.search("meu"); // -> [  ]
```