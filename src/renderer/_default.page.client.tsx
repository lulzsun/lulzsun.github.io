export { render }

import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { PageContextClient } from './types'

async function render(pageContext: PageContextClient) {
  const { Page } = pageContext
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  )
}