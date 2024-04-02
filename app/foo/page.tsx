export const dynamic = "force-dynamic"

export default async function FooPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return <p className="mb-4">Page using Dynamic Rendering</p>
}
