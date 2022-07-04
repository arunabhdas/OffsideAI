import {
  listings,
  listing,
  createListing,
  updateListing,
  deleteListing,
} from './listings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('listings', () => {
  scenario('returns all listings', async (scenario) => {
    const result = await listings()

    expect(result.length).toEqual(Object.keys(scenario.listing).length)
  })

  scenario('returns a single listing', async (scenario) => {
    const result = await listing({ id: scenario.listing.one.id })

    expect(result).toEqual(scenario.listing.one)
  })

  scenario('creates a listing', async () => {
    const result = await createListing({
      input: { title: 'String', description: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a listing', async (scenario) => {
    const original = await listing({ id: scenario.listing.one.id })
    const result = await updateListing({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a listing', async (scenario) => {
    const original = await deleteListing({ id: scenario.listing.one.id })
    const result = await listing({ id: original.id })

    expect(result).toEqual(null)
  })
})
