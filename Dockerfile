#qual versão do node deseja utilizar
FROM node:alpine

#definir uma propriedade, o diretório da máquina que quer trabalhar
WORKDIR /usr/app

#copiar todos os arquivos que começam com package e json pra dentro da máquina
COPY package*.json ./

#Instala as dependências
RUN npm install

#Copia todos os arquivos restantes da pasta pra dentro do container
COPY . .

#Qual porta que o servidor la dentro precisa expor aqui pra minha máquina acessar
EXPOSE 3000

#Deve ser única por dockerfile e é a propriedade que indica qual comando eu servidor
#deve rodar para a aplicação startar
CMD ["expo","start"]