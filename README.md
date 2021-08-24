JS of OCAML Starter
===================

First, get the `js_of_ocaml` dependencies [from here](https://ocsigen.org/js_of_ocaml/latest/manual/overview).

    brew install ocaml opam
    opam init
    opam install ocamlfind js_of_ocaml js_of_ocaml-ppx
    eval $(opam env)

Install `grunt` with `npm install -g grunt`

Then run `yarn` or `npm install`.

Run `grunt` to watch for changes to `lib/*.ml` files.
