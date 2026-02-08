import React from 'react'

const HomePage = () => {
  return (
    <div>
         <header>
      <button className='btn btn-secondary'>Click me</button>
      
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
  )
}

export default HomePage