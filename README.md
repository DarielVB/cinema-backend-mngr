# cinema-backend-mngr
mngr del DariCinema

# Comandos
Creo mi proyecto node
npm init -y
tsc --init

Instalo mis dependencias
npm install express aws-sdk serverless

Creo mis carpetas
/ src
/ src / controllers
/ src / services
/ src / repositories


Para hacer uso de las apis por favor usar el siguiente link (temporal, lo cerrare despues de la kata)

https://jql7ljlyg1.execute-api.us-east-2.amazonaws.com/dev/dev

los siguientes paths son los que se pueden usar
- /getMovies
- /createMovie
- /getRooms
- /createRoom
- /getShowtimes
- /createShowtime
- /getReservations
- /getReservationsByShowTimeId/:showTimeId
- /createReservation