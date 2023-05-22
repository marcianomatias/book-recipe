# Book Recipes App

Este é um repositório para o aplicativo Book Recipes, desenvolvido por Marciano Matias. O aplicativo utiliza a API da Spoonacular para fornecer uma variedade de receitas de forma automática. A cada atualização da página, 15 novas receitas serão geradas e exibidas.

## Recursos

- Geração automática de receitas: Ao atualizar a página, o aplicativo consulta a API da Spoonacular e gera automaticamente uma lista de 15 novas receitas. Isso garante que os usuários tenham acesso a uma variedade de opções a cada vez que usarem o aplicativo.

- Detalhes da receita: Ao clicar em uma receita da lista, os usuários podem visualizar os detalhes completos da receita, incluindo os ingredientes necessários, as instruções de preparo e informações nutricionais.

- Responsividade: O aplicativo foi desenvolvido com foco na resposividade, permitindo que os usuários acessem e utilizem o aplicativo em diferentes dispositivos, como smartphones, tablets e desktops.

## Tecnologias Utilizadas

O aplicativo Book Recipes foi desenvolvido utilizando as seguintes tecnologias:

- HTML: Para estruturar a interface do aplicativo.
- CSS: Para estilizar a interface e torná-la atraente e responsiva.
- JavaScript: Para a lógica de programação do aplicativo, interações com a API da Spoonacular e manipulação de dados.

## Como Utilizar

### Gerando uma Chave da API da Spoonacular

Para utilizar a API da Spoonacular em seu aplicativo Book Recipes, você precisará gerar uma chave de API no site oficial da Spoonacular. Siga as etapas abaixo para obter sua chave:

1. Acesse o site da Spoonacular em https://spoonacular.com/food-api.

2. Clique em "Sign up" (Registrar-se) no canto superior direito da página para criar uma conta gratuita.

3. Preencha o formulário de registro com suas informações pessoais e escolha um nome de usuário e senha. Em seguida, clique em "Create Account" (Criar Conta).

4. Após criar sua conta, faça login usando seu nome de usuário e senha.

5. Uma vez logado, vá para a página de preços da API da Spoonacular.

6. Role para baixo até encontrar o plano gratuito e clique em "Get Free API Key" (Obter Chave da API Gratuita).

7. Leia e concorde com os termos de uso da API.

8. Em seguida, você verá sua chave da API gerada. Copie essa chave para utilizá-la no seu aplicativo Book Recipes.

9. No código do seu aplicativo, substitua `SUACHAVEAPI` pela chave da API que você acabou de copiar.

```javascript
const apiKey = 'SUACHAVEAPI';
```

Agora você possui uma chave da API da Spoonacular e pode utilizá-la em seu aplicativo Book Recipes para acessar os recursos e dados fornecidos pela API.

1. Clone este repositório em seu ambiente de desenvolvimento local.

```shell
git clone https://github.com/marcianomatias/book-recipes.git
```

2. Abra o diretório clonado em um editor de código de sua preferência.

3. Execute o arquivo `index.html` em um navegador da web.

4. No aplicativo Book Recipes, você verá automaticamente uma lista de 15 receitas geradas pela API da Spoonacular.

5. Ao clicar em uma receita, você terá acesso aos detalhes completos, incluindo ingredientes, instruções de preparo e informações nutricionais.

6. Se desejar ver mais receitas, basta atualizar a página e uma nova lista de 15 receitas será gerada automaticamente.

## Contribuindo

Se você deseja contribuir para o desenvolvimento deste aplicativo, sinta-se à vontade para enviar um pull request. Farei o possível para revisar e mesclar as contribuições.

## Problemas e Sugestões

Se você encontrar algum problema ao usar o aplicativo ou tiver sugestões de melhoria, por favor, abra uma issue neste repositório. Farei o possível para responder e resolver os problemas encontrados.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE). Sinta-se à vontade para utilizar, modificar e distribuir o aplicativo de acordo com os termos da licença.

![image](https://github.com/marcianomatias/book-recipe/assets/10820742/2f02eef6-6f21-4c40-acc7-7585e7e81457)
![image](https://github.com/marcianomatias/book-recipe/assets/10820742/d5d32939-a581-4035-9f98-e188ff815cba)


