import React from 'react'
import Profile from './Profile'

function SomethingWrong() {
  return (
    <>
    <Profile />
    <div className="pageNotFoundContainer somethingWentWrong">
      <p className="pageNotFoundHeading">OOPS!! SOMETHING WENT WRONG</p>
    </div>
    </>
  )
}

export default React.memo(SomethingWrong);