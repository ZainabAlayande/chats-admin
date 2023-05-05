WORKDIR /godmode
COPY package.json ./
RUN npm i
COPY . .

