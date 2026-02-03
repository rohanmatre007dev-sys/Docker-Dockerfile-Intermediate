FROM gcr.io/distroless/nodejs20-debian11

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY server.js ./

USER 1001

EXPOSE 4000

CMD ["server.js"]