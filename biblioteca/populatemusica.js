#! /usr/bin/env node

console.log(
  'This script populates some test books, musicas, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://vitoria:99163391@cluster0.xsinvbf.mongodb.net/?appName=Cluster0"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Musica = require("./models/musica");

const musicas = [];

const mongoose = require("mongoose");
const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createMusicas();
  console.log("Debug: Closing mongoose");
  await mongoose.connection.close();
}

async function musicaCreate(index, titulo, artista, album, ano) {
  const musictail = {
    title: titulo,
    artist: artista,
    album: album,
    ano: ano,
  };
  const musica = new Musica(musictail);
  await musica.save();
  musicas[index] = musica;
  console.log(`Added musica: ${titulo}`);
}
  console.log("Adding musica");
  await musicaCreate(0, "hermit the frog", "Marina", "The Family Jewels", "2010-02-15");
  await musicaCreate(1, "sippy cup", "Melanie Martinez", "Cry Baby", "2015-08-14");
  await musicaCreate(2, "bad idea right", "Olivia Rodrigo", "SOUR", "2021-05-21");
  await musicaCreate(3, "love shot", "EXO", "Love Shot", "2018-12-13");
  await musicaCreate(4, "eric", "Mitski", "Laurel Hell", "2022-02-18");