FROM mysql:8

ENV MYSQL_USER=dev
ENV MYSQL_PASSWORD=password
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=gymnastique

COPY ./migrations/ /docker-entrypoint-initdb.d/
