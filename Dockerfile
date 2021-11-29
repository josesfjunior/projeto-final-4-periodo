FROM openjdk:17

WORKDIR /app

COPY target/projeto-final-0.0.1-SNAPSHOT.jar /app/server.jar

COPY mvnw /app
COPY mvnw.cmd /app

ENTRYPOINT ["java","-jar","server.jar"]

EXPOSE 8080