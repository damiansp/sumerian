# Sumerian

A very simple GUI or web-app that lets the user type cuneiform via Roman inputs, akin to the method used for Chinese keyboards. Specifically, glyphs that match the input entered appear in the order of their frequency, and allow the user to use the output number to choose the glyph from the list of potentially matching candidates.

TODO:
- [X] Clean files in corpus (remove html tags; make option ot retain `<sup>` and `<sub>` tags
- [X] For each clean file, strip out annotations and make dictionary of ngram counts (for n in 1:4 or :5)
- [ ] Compile a list of all syllables and their corresponding signs (in unicode)
