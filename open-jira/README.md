# Next.js Open Jira 
Para correr localmente se necesita la base de datos 

```
docker-compose up -d
```

* El -d, siginifica __detached__

MongoDB, URL Local:
```mongodb://localhost:27017/entriesdb```


# Configurar las variables de netorno
renombrar el archivo __.env.template__ a __.env__


# llenar la base de datos con informacion de pruebas
llamar: 
```http://localhost:3000/api/seed```