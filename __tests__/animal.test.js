const fs =require("fs")
const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal,
} = require("../lib/animals.js");
const {animals} = require ("../data/animals.json");
const { hasUncaughtExceptionCaptureCallback } = require("process");

test("creates an animal object", () => {
    const animal = createNewAnimal({name: "Darlene", id: "test1"},
    animals);

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("test1");
});

test("filters by query", () => {
   
})



