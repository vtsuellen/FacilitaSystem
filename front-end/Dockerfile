FROM node:18.17-alpine
# Mudar para o diretório de trabalho /front-end
WORKDIR /front-end
# Copiar os package.json e package-lock.json para o container
COPY package*.json ./
# Instalar as dependências Node
RUN npm install
# Copiar o restante dos arquivos da aplicação para o container
COPY . .
# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000
# Configurar os comandos para iniciar a aplicação 
ENTRYPOINT [ "npm" ]
CMD ["run", "dev"]
