<div align="center">
  <img src="./cover.svg" alt="🚧 Padrões de Projeto em TypeScript 🚧" width="100%">
</div>

<p align="center">Este repositório contém meus estudos sobre Padrões de Projeto. É para cá que eu retornarei quando precisar relembra-los. Espero que também possa servir de referência para outros desenvolvedores</p>

## 🚜 Uma palavra sobre

O [capítulo 6](https://engsoftmoderna.info/cap6.html) do livro [Engenharia de Software Moderna](https://engsoftmoderna.info) começa com essa introdução:

Padrões de projeto são inspirados em uma ideia proposta por Christopher Alexander, um arquiteto — de construções civis e não de software — e professor da Universidade de Berkeley. Em 1977, Alexander lançou um livro chamado A Patterns Language, no qual ele documenta diversos padrões para construção de cidades e prédios. Segundo Alexander:

> "Cada padrão descreve um problema que sempre ocorre em nosso contexto e uma solução para ele, de forma que possamos usá-la um milhão de vezes."

Em 1995, Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides lançaram um livro adaptando as ideias de Alexander para o mundo de desenvolvimento de software. Em vez de propor um catálogo de soluções para projeto de cidades e prédios, eles propuseram um catálogo com soluções para resolver problemas recorrentes em projeto de software. Eles deram o nome de Padrões de Projeto às soluções propostas no livro. Eles definem padrões de projeto da seguinte forma:

> "Padrões de projeto descrevem objetos e classes que se relacionam para resolver um problema de projeto genérico em um contexto particular."

O site [Refactoring Guru](https://refactoring.guru/) traz a seguinte definição:

> "Padrões de projeto são soluções típicas para problemas comuns em projeto de software. Eles são como plantas de obra pré fabricadas que você pode customizar para resolver um problema de projeto recorrente em seu código."

 Em seu repositório ([kamranahmedse/design-patterns-for-humans](https://github.com/kamranahmedse/design-patterns-for-humans)), Kamran Ahmed define os padrões de projeto como sendo:

> "...soluções para problemas recorrentes; orientações sobre como lidar com determinados problemas. Eles não são classes, pacotes ou bibliotecas que você pode conectar em seu aplicativo e esperar que a mágica aconteça. Estas são, antes, orientações sobre como lidar com determinados problemas em determinadas situações."

## 📖 Tipos de Padrões de Projeto

Os padrões marcados com "check" já foram estudados, e portanto, estão devidamente documentados e implementados.

* [ ] [Criacionais](./src/creational/doc.md)
* [ ] [Estruturais](./src/structural/doc.md)
* [ ] [Comportamentais](./src/behavioral/doc.md)

## ✅ Testando os Padrões de Projeto

Ao final de cada uma das documentações dos padrões existe uma seção que começa com _"E então, pode ser utilizado assim"_. Esta seção se propõe a demonstrar como um código cliente pode fazer uso do padrão aplicado. Além disso, cada padrão de projeto têm um arquivo `*.test.ts` em seu diretório, e este, contém o uso prático de um cliente (o teste). Para executar todos os testes execute o comando `npm run test` (estou considerando que já executou o comando `npm install`, anteriormente).

## 🎒 Referências

Todo o conteúdo útil deste repositório é um compilado dos materiais abaixo. Às vezes copiei por completo algum texto. Os exemplos geralmente foram adaptados na sua construção, para facilitar o entendimento, ou apenas para se adequarem ao TypeScript.

* [Padrões de Projeto em JAVA na Prática!](https://www.udemy.com/course/padroes-de-projeto-em-java-na-pratica) (curso)
* [Padrões de Projeto, Soluções reutilizáveis de software orientado a objetos](https://www.udemy.com/course/padroes-de-projeto-em-java-na-pratica) (livro)
* [Engenharia de Software Moderna - Capítulo 6](https://engsoftmoderna.info/cap6.html) (livro)
* [kamranahmedse/design-patterns-for-humans](https://github.com/kamranahmedse/design-patterns-for-humans) (repositório)
* [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns) (website)

## Licença

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR)

👷🏻‍♂️ Caso encontre algum erro me avise, por favor!
