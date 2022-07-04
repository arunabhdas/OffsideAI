import { db } from 'src/lib/db'

export const listings = () => {
  return db.listing.findMany()
}

export const listing = ({ id }) => {
  return db.listing.findUnique({
    where: { id },
  })
}

export const createListing = ({ input }) => {
  return db.listing.create({
    data: input,
  })
}

export const updateListing = ({ id, input }) => {
  return db.listing.update({
    data: input,
    where: { id },
  })
}

export const deleteListing = ({ id }) => {
  return db.listing.delete({
    where: { id },
  })
}
