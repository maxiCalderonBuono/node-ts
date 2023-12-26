import { getPokemonById } from '../../src/js-foundation/06-promesas';


describe("js-foundation/06-promesas.ts", () => {

  test("getPokemonById should return a pokemons", async () => {

    const pokemonId = 1
    const pokemonName = await getPokemonById(pokemonId)

    expect(pokemonName).toBe("bulbasaur")
  })

  test("getPokemonById should return an error if pokemon not found", async () => {

    const pokemonId = 100000

    try {
      await getPokemonById(pokemonId)
      expect(true).toBe(false)
      expect(true).toBeFalsy()
    } catch (error) {
      expect(error).toBe("Pokemon with id 100000 not found.")
    }
  })
})