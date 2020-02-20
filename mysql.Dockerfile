FROM mysql:8

ENV MYSQL_USER=dev
ENV MYSQL_PASSWORD=password
<<<<<<< HEAD
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=recipe

COPY ./migrations/ /docker-entrypoint-initdb.d/
COPY ./mysqlconf/mysql.cnf /etc/mysql/conf.d

CMD ["--default-authentication-plugin=mysql_native_password"]
=======
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=gymnastique

COPY ./migrations/ /docker-entrypoint-initdb.d/
>>>>>>> bae301c358856751f35b947585b379ebf0cb5a95
