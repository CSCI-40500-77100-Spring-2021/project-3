import React, { useState, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  error: null,
  audioPost: [],
}

function getAudioPost(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        audioPost: action.audioPost,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        greeting: { },
      }
    }
    default: {
      return state
    }
  }
}

export default function Fetch({ url }) {
  const [{ error, audioPost }, dispatch] = useReducer(
    getAudioPost,
    initialState
  )
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchAudioPost = async (url) =>
    axios
      .get(url)
      .then((response) => {
        const { data } = response
        const { audioPost } = data
        dispatch({ type: 'SUCCESS', audioPost })
        setButtonClicked(true)
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', error })
      })

  const buttonText = buttonClicked ? 'Ok' : 'Load Post'

  return (
    <div>
      <button onClick={() => fetchAudioPost(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {audioPost && <h1>{audioPost}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
}