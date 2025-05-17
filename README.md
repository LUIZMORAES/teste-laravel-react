# teste-laravel-react

Sistema de login e produtos com laravel react

## Requisitos

- PHP 8.2 ou superior;
- MySQL 8 ou superior;
- Composer;
- Node.js 20 ou superior;

## Como rodar o projeto baixado

Duplicar o arquivo ".env.example" e renomear para ".env".<br>
Alterar no arquivo ".env" as credencias do banco de dados.<br>

Instalar as dependências do PHP.

```
composer install
```

Instalar as dependências do Node.js.

```
npm install
```

Gerar a chave no arquivo .env.

```
php artisan key:generate
```

Executar as migration para criar a base de dados e as tabela.

```
php artisan migrate
```

Cadastrar registro de teste.

```
php artisan db:seed
```

Iniciar o projeto criado com Laravel.

```
php artisan serve
```

Executar as bibliotecas Node.js.

```
npm run dev
```

Acessar no navegador a URL.

```
http://127.0.0.1:8000
```

## Como usar o GitHub

Verificar a versão do GIT.

```
git -v
```

Baixar os arquivos do GitHub.

```
git clone -b <branch_nome> <repositorio_url> .
git clone https://github.com/LUIZMORAES/teste-laravel-react.git .

```

Verificar a branch.

```
git branch
```

Baixar as atualizações do projeto.

```
git pull
```

Adicionar todos os arquivos modificados no staging area - área de preparação.

```
git add .
```

commit representa um conjunto de alterações em um ponto específico da história do seu projeto, registra apenas as alterações adicionadas ao índice de preparação.
O comando -m permite que insira a mensagem de commit diretamente na linha de comando.

```
git commit -m "Descrição do commit"
```

Enviar os commits locais, para um repositório remoto.

```
git push <remote> <branch>
git push origin main
```

Alterar o valor das variaveis de ambiente.

```
APP_NAME=
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_TIMEZONE=America/Sao_Paulo
APP_URL=
```

Comentar as variaveis de conexão.

```
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=
# DB_USERNAME=
# DB_PASSWORD=
```

Alterar para armazenar as sessões no arquivo "file".

```
SESSION_DRIVER=file
```

Limpar cache de configuração.

```
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Instalar as dependências do PHP.

```
composer install
```

Gerar a build. Compilar o código-fonte do projeto.

```
npm run build
```

Gerar a chave.

```
php artisan key:generate
```

Reiniciar Nginx.

```
sudo systemctl restart nginx
```

Limpar cache.

```
php artisan config:clear
```

Quando gerar o erro "", necessário instalar o Vite. Executar e Etapa 1, Etapa 2 e Etapa 3.

```
npm install
```

Etapa 1 - Verificar se o Vite está instalado.

```
npx vite --version
```

Etapa 2 - Gerar a build. Compilar o código-fonte do projeto.

```
npm run build
```

Etapa 3 - Remover o diretório "node_modules".

Verificar as vulnerabilidades.

```
npm audit
```

Corrigir automaticamente todas as vulnerabilidades.

```
npm audit fix
```

Atualizar manualmente a dependência.

```
npm install nome-da-dependencia@latest
```

Criar a base de dados.<br>
Alterar no arquivo .env as credenciais do banco de dados.<br>

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome-da-base-de-dados
DB_USERNAME=usuario-do-banco-de-dados
DB_PASSWORD=senha-do-banco-de-dados
```

Alterar para armazenar as sessões no arquivo "file".

```
SESSION_DRIVER=database
```

Executar as migration para criar a base de dados e as tabela.

```
php artisan migrate
```

Cadastrar registro de teste.

```
php artisan db:seed
```

## Instalar o Node.js no servidor.

Atualizar a lista de pacotes disponíveis nos repositórios do sistema.

```
sudo apt update
```

Adicionar no repositório o Node.js 20.x.

```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

Instalar o Node.js. -y automatizar a instalação de pacotes sem solicitar a confirmação manual do usuário.

```
sudo apt install -y nodejs
```

Reiniciar Nginx.

```
sudo systemctl restart nginx
```

Limpar cache.

```
php artisan config:clear
```

Remover o Node.js.

```
sudo apt remove nodejs
```
