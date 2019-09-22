import React from 'react'
import Error from 'next/error'
import Router from 'next/router'

export default class Page extends React.Component {
  render() {
    // I still want to return the regular error is I did not do the redirect.
    return <Error statusCode={404} />
  }
}