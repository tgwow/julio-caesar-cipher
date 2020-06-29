# Criptografia de Júlio César
> Resolução do desafio para codenation

## What's Julio Caesar Cypher?
Segundo o Wikipedia, criptografia ou criptologia (em grego: kryptós, “escondido”, e gráphein, “escrita”) é o estudo e prática de princípios e técnicas para comunicação segura na presença de terceiros, chamados “adversários”. Muitos aspectos em segurança da informação, como confidencialidade, integridade de dados, autenticação e não-repúdio são centrais à criptografia moderna. Das Criptografias mais curiosas na história da humanidade podemos citar a criptografia utilizada pelo grande líder militar romano Júlio César para comunicar com os seus generais. Essa criptografia se baseia na substituição da letra do alfabeto avançado um determinado número de casas. Por exemplo, considerando o número de casas = 3:

**Normal:** a ligeira raposa marrom saltou sobre o cachorro cansado

**Cifrado:** d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr

## Regras
As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia. No nosso caso os números e pontos serão mantidos, ou seja: 

**Normal:** 1a.a

**Cifrado:** 1d.d

Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url abaixo:

``https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN``

Para encontrar o seu token , acesse a plataforma Codenation, faça o login e a informação estará na tela, conforme no exemplo abaixo:

O resultado da requisição vai ser um JSON conforme o exemplo:
```json
{
    "numero_casas": 10,
    "token":"token_do_usuario",
    "cifrado": "texto criptografado",
    "decifrado": "aqui vai o texto decifrado",
    "resumo_criptografico": "aqui vai o resumo"
}
```
O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome answer.json, que irá usar no restante do desafio.

Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo decifrado. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo sha1 e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo sha1 do texto decifrado.

Seu programa deve submeter o arquivo atualizado para correção via POST para a API:

``https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN``

OBS: a API espera um arquivo sendo enviado como multipart/form-data, como se fosse enviado por um formulário HTML, com um campo do tipo file com o nome answer. Considere isso ao enviar o arquivo.

## Installation

OS X & Linux

### API

1. Clone this [repo](https://github.com/tgwow/julio-caesar-cipher.git) in your machine
`git clone https://github.com/tgwow/julio-caesar-cipher.git`
2. Navigate to api folder and install dependencies
`cd api && npm install`
3. Run api in locahost
`npm start`

### Backend
1. Navigate to backend folder and install dependencies
`cd .. ` 
`cd backend && npm install`
2. run backend in locahost
`npm start`

## How to use

After you started API and backend servers, follow the steps:
1. Open your browser in this [url](localhost:3000)

2. To get ciphered data move to [ciphered](http://localhost:3000/api/crypt/get)

3. To decipher data and see the results click move to [deciphered](http://localhost:3000/api/crypt/post)

## Contributing

1. Fork it (<https://github.com/tgwow/julio-caesar-cipher/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
