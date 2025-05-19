# PFO-docker

Este proyecto contiene una aplicación Node.js que se conecta a una base de datos MySQL usando contenedores Docker.

## Cómo correr el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/IsabellaChiaradia/PFO-docker.git
cd PFO-docker
```

2. Levantar los contenedores con Docker Compose (construye las imágenes si es necesario):

```bash
docker-compose up --build
```

3. La aplicación Node.js estará disponible en:

```bash
http://localhost:3000
```

4. La base de datos MySQL corre en el puerto 3306.

### Puertos usados
MySQL: 3306

Node.js app: 3000

### Notas
Si algún puerto está ocupado, puede ser necesario detener procesos locales que estén usando esos puertos.

La aplicación Node.js se conecta a MySQL usando el nombre del servicio db dentro de la red de Docker.