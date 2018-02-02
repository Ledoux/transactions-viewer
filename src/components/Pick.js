import React from 'react'
import { withRouter } from 'react-router'

const Pick = ({ configure, history }) => {
  const count = parseInt(configure.filters.split(':').slice(-1)[0])
  return (
    <div className='pick col-10 sm-col-7 mx-auto mt3 p2 mb2'>
      <button onClick={() => history.push(`/content/links/${count + 1}`)} >
        Next
      </button>
      <div>
        {count}
      </div>
    </div>
  )
}

export default withRouter(Pick)
