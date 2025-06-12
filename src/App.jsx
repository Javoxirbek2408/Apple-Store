import { Route, Routes } from 'react-router-dom'
import { routes } from './router/routes.js'
import { Layout } from './layout/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App