import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 6300))
    return { data: 'Hello from the loader!' }
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return (
    <div>
      Hello "/about"!
      <br />
      {data.data}
    </div>
  )
}
