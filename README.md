# Twitter

## Introdução

Essa mini-réplica da rede social Twitter foi criada com o propósito de aplicar conceitos de manipulação do DOM e utilização de eventos para criar sites interativos. 

## Objetivos

A partir de modificações no DOM e utilização de eventos, permitir ao usuário escrever e publicar tweets, seguindo os requisitos das versões abaixo:

* 0.0.1: criar um formulário que permita inserir um texto e um botão para "twittar". A partir de um evento no botão, adicionar o tweet no HTML.

*  0.0.2: Não permitir inserir texto vazio (desativar o botão). Contar o número de caracteres de forma regressiva.

* 0.0.3: desativar o botão quando passar os 140 caracteres e mostrar o contador em negativo. Mudar de cor quando passar de 120 caracteres e depois 130.

* 0.0.4: ao pressionar enter (/n) aumentar a área de texto de acordo com o tamanho do texto.

* 0.0.5 (Hacker edition): aumentar área como na versão anterior mas sem que o usuário precise apertar o enter, apenas com um texto que exceda a área inicial.

* 0.0.6 (Hacker edition): adicionar a hora em que o tweet foi publicado no formato de 24 horas hh:mm.

## Produto

### Estrutura de arquivos

* Este arquivo `README.md` explicando o conteúdo de seu repositório;
* Um arquivo-base `index.html`;
* Pasta `css` com arquivo-base `main.css`;
* Pasta `assets` com a pasta `images` com a imagem do background;
* A pasta `docs` com o template inicial;
* A opção de incluir a hora do tweet foi incluída a partir de moment.js de diretório da web.

### Template e CSS

O layout foi desenvolvido a partir do template sugerido abaixo:

![Twitter template](docs/template.png)


Para estilização com CSS foram utilizados:

* Flexbox como principal recurso para disposição do conteúdo na página;
* Fonte padrão sem serifa;
* Paleta de cores: azul do twitter `#1DA1F2` e cinzas (do mais escuro para mais claro) `#4D5B66`, `#888888` e `#BFAFAC`;

### HTML

Foi estruturado utilizando tags semânticas de acordo com o conteúdo.

No body estão contidos:
* Header com o nome do site;
* Um main com três sections: uma para o nome e bio do usuário (não editável), uma para inserção do tweet (campo para digitação e botão) e uma para publicação dos tweets (vazia a princípio - vai sendo modificada pelo JS);

### JavaScript

Estruturado em quatro funções:
* btnEnable e btnDisabled para habilitar e desabilitar o botão, respectivamente;
* reset para resetar o contador, o botão e a área de texto após a publicação de um tweet ou caso o usuário apague a mensagem antes de enviar;
* newRows para aumentar a aréa de texto conforme requisitado nas versões 0.0.4 e 0.0.5;
* typingTweet que captura a quantidade de caracteres da mensagem enquanto ela é digitada e aplica as cores ao contador e ativa/desativa o botão;
* newTweet captura o texto digitado e a hora do tweet e printa no HTML utilizando createElement, appendChild e innerHTML.

Com addEventListener as funções typingTweet e newTweet são invocadas a partir dos eventos de digitação na textarea com 'input' e clique no botão com 'click'.

