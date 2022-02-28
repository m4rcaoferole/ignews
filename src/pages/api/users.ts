import { NextApiRequest, NextApiResponse } from 'next'

export  default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Marcos'},
    { id: 2, name: 'Luiz'},
    { id: 3, name: 'Rose'}
  ]

  return response.json(users);
}
