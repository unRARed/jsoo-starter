#!/usr/bin/env bash

#####################################################
## Compiles all *.ml files in lib/ to JS in build/ ##
#####################################################

mkdir -p build/lib
SOURCE_FILES=$(find lib -name '*.ml')
for file in $SOURCE_FILES
do
  filename="${file%.*}"
  name="${filename##*/}"
  ocamlfind ocamlc -package js_of_ocaml -package js_of_ocaml-ppx \
            -linkpkg -o $filename.byte $file
  echo "Compiling build/$name.js"
  js_of_ocaml $filename.byte -o build/$name.js
  rm $filename.byte
  rm $filename.cmo
  rm $filename.cmi
done
