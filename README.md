# Quebrador de Biscoito da Sorte em React Native

## Introdução

Este código implementa um aplicativo simples em React Native que simula um quebrador de biscoito da sorte. O usuário pode clicar em um botão para quebrar o biscoito e receber uma mensagem aleatória de sabedoria ou inspiração.

## Componentes Principais

### 1. App Function Component

O componente principal `App` é uma função que retorna a interface do aplicativo. Ele utiliza o estado para controlar a imagem exibida e a frase do biscoito da sorte.

#### Estado:

- **img:** Armazena a imagem do biscoito, que muda entre fechado e aberto.
- **textoFrase:** Armazena a frase aleatória exibida ao usuário.

#### Funções:

- **quebraBiscoito():** Gera um número aleatório para selecionar uma frase da lista e atualiza o estado da imagem e do texto com a frase escolhida.
- **reiniciar():** Reinicia o estado para exibir a imagem do biscoito fechado e limpa o texto da frase.

### 2. Lista de Frases

A variável `frases` contém uma lista de frases de sabedoria ou inspiração que podem ser exibidas para o usuário.

### 3. Estilos (Styles)

O código inclui um objeto `styles` criado com o `StyleSheet.create`. Ele define os estilos para os diversos componentes, como o container, a imagem, o texto da frase e os botões.

## Estrutura da Interface

A interface do aplicativo consiste em:

- Uma imagem do biscoito que muda entre aberto e fechado.
- Um texto exibindo a frase do biscoito da sorte.
- Dois botões: "Quebrar Biscoito" e "Reiniciar Biscoito".

## Como Usar

1. Clone o repositório ou copie o código para um projeto React Native.
2. Certifique-se de ter as dependências instaladas (`react`, `react-native`, etc.).
3. Execute o aplicativo em um emulador ou dispositivo físico usando o comando `npx react-native run-android` ou `npx react-native run-ios`.
4. Interaja com o aplicativo clicando no botão "Quebrar Biscoito" para receber uma mensagem aleatória e no botão "Reiniciar Biscoito" para reiniciar o processo.

## Considerações Finais

Este aplicativo é um exemplo simples de como criar uma aplicação React Native com funcionalidades básicas de manipulação de estado e eventos de toque. Você pode personalizar as mensagens, estilos e funcionalidades conforme necessário para atender às suas necessidades específicas.

