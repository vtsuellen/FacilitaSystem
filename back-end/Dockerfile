FROM node:18.17-alpine
# Mudar para o diretório de trabalho /back-end
WORKDIR /back-end
# Copiar os package.json, package-lock.json e packages.npm para o container
COPY package*.json ./
# Instalar as dependências Node
RUN npm install
# Copiar o restante dos arquivos da aplicação para o container
COPY . .
# Sinalize que aplicação expõe a porta 2122
EXPOSE 2122
# Configurar os comandos para iniciar a aplicação 
ENTRYPOINT [ "npm" ]
CMD ["run", "dev"]
