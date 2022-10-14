import { render, screen } from "@testing-library/react"
import { mocked } from 'jest-mock'
import { useSession } from 'next-auth/react'
import { SignInButton } from "."

jest.mock('next-auth/react')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValue([null, false])

    render(<SignInButton />)
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })

  it('renders correctly when user is authenticated', () => {
    render(<SignInButton />)
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })
})