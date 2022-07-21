import React from 'react'
import CardGames from '../comp/CardGames'

export default function Games() {
  return (
    <div className='center text-center'>
        <div className="d-flex justify-content-center">
                <div className="center text-center text-danger mt-3 bg-dark p-2 w-25 rounded h1 mb-2">Games</div>
            </div>
        <CardGames />
    </div>
  )
}
