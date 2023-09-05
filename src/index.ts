// const fs = require("fs")
import fs, { outputJsonSync } from "fs-extra"

console.log("Hello world")
console.log(process.argv)

if (process.argv.includes("--help")) {
  console.log("Je vais vous aider")
} else {
  console.log("Débrouille toi")
}

if (process.argv.includes("--name")) {
  const posArgName = process.argv.indexOf("--name")
  const posName = posArgName + 1
  const name = process.argv[posName]
  console.log("Bonjour " + name)
}

// 1 - créer un objet "personne" avec les propriétés suivantes : nom, prenom, age, sexe
// 2 - loguer l'objet
// 3 - changer le nom et le prenom par Laforge et Thomas
// 4 - loguer l'objet initial et l'objet modifié
// 5 - créer un objet "personne2" à partir de la première personne (copie)
// 6 - changer le nom et le prenom de la personne2 par Amish et Fatir
// 7 - loguer les trois objets

// const todos = [
//     {
//         name: 'tache 1',
//         status: true
//     },
//     {
//         name: 'tache 2',
//         status: false
//     }
// ]

// const todosName = ["tache 3", "tache 2"]
// const todosStatus = [true, false]

interface IPersonne {
  nom: string
  prenom: string
  age: number
  sexe: string
}

const p: IPersonne = {
  nom: "fopjhpjopj",
  prenom: "jfsdkjfsfsf",
  age: 32,
  sexe: "homme",
}

console.log("p initial", p)

p.prenom = "Thomas"
p.nom = "Laforge"

console.log("p modifié en Thomas Laforge", p)

const p2: IPersonne = {
  ...p,
  prenom: "Fatir",
}

p2.nom = "Amish"

console.log("p2", p, p2)

const file = "./file.json"
outputJsonSync(file, p2)

const data = fs.readJsonSync(file)
console.log(data) // => JP

import "dotenv/config"

console.log("env", process.env.NAME)
