import PropTypes from 'prop-types'
import React from 'react'

const Explore = () => {
  return (
    <div className='sm-col-10 mx-auto p1'>
    </div>
  )
}

Explore.defaultProps = {
  configure: {
    hitsPerPage: 10
  }
}

Explore.propTypes = {
  indexName: PropTypes.string.isRequired
}

export default Explore
