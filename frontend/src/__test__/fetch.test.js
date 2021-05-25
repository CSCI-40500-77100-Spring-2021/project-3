// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fetch from '../components/fetch'

const server = setupServer(
  rest.get('/audiopost', (req, res, ctx) => {
    return res(ctx.json({ title: 'Amore', username: 'lalala@gmail.com' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays audiopost', async () => {
  render(<Fetch url="/audiopost" />)

  fireEvent.click(screen.getByText('Load Post'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).not.toHaveTextContent('hello there')
  expect(screen.getByRole('button')).not.toBeDisabled()
})

test('handles server error', async () => {
  server.use(
    rest.get('/audiopost', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<Fetch url="/audiopost" />)

  fireEvent.click(screen.getByText('Load Post'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toBeDisabled()
})