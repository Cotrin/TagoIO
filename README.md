# Instruções

Neste teste, não será usado nenhuma tecnologia de front-end, apenas backend. Pode ser feito em Node.js ou Deno, com ou sem typescript.

A SpaceX tem uma API aberta de Graphql, eu preciso que você conecte no GraphQL server deles, que está neste endereço

https://api.spacex.land/graphql/

E gere um relatório em CSV, dos navios que estão ativa, contendo o nome do navio e a missão que ela está fazendo no momento.

Os CSV pode ser apenas apresentado no terminal, sem gerar nenhum arquivo.

---
## Campos Requisitados

- Apenas navios ativos
- Nome do navio
- Missão atual do navio

    - Premissas sobre as missões: 
        - O retorno é um Array de missões, portanto foi considerado que a última posição do array era a missão atual do navio.


## Executando o script

```bash
npm start
```

## Alternativas

Os dados presentes na requisição estão sendo apresentados no terminal conforme as instruções. Entretanto, também deixei presente no código como escreve-las em um arquivo .CSV separado.

Caso queiram essa alteração só é necessário comentar o Console Data e "descomentar" o Write CSV File conforme o código abaixo:

```ts
    // Console Data
    // console.table(csv)

    // Write CSV File manually
    require("fs").writeFileSync("ships-report.csv", csv)
```

### Fontes de pesquisa
 - https://code-boxx.com/write-csv-nodejs/
 - https://hasura.io/blog/how-to-request-a-graphql-api-with-fetch-or-axios/


