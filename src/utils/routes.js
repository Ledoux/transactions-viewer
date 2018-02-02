import React from 'react'
import { Redirect } from 'react-router'

import Explore from '../components/Explore'
import Page from '../components/Page'
import Pick from '../components/Pick'
import HomePage from '../pages/HomePage'

const routes = [
  {
    exact: true,
    path: '/',
    render: () => <Redirect to="/home" />
  },
  {
    exact: true,
    path: '/home',
    render: () => <HomePage />
  },
  {
    exact: true,
    path: '/content/:collectionName',
    render: ({ match: { params: { collectionName } } }) => {
      return (
        <Page>
          <Explore collectionName={collectionName} />
        </Page>
      )
    }
  },
  {
    exact: true,
    path: '/content/:collectionName/:slug',
    render: ({ match: { params: { collectionName, slug } } }) => {
      return (
        <Page>
          <Pick configure={{ filters: `slug:${slug}` }}
            collectionName={collectionName} />
        </Page>
      )
    }
  }
]

export default routes
