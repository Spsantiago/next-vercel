## Next.js Teslo-Shop 
Para correr localmente se necesita la base de datos 

```
docker-compose up -d
```

* El -d, siginifica __detached__

## Configurar las variables de netorno
renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local: 
```
MONGO_URL='mongodb://0.0.0.0:27017/teslodb'
```
* Reconstruir los modulos de Node y levantar Next 
```
yarn install
yarn dev
```


## llenar la base de datos con informacion de pruebas
llamar: 
```http://localhost:3000/api/seed```