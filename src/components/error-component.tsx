export function ErrorComponent({ error }: { error: unknown }) {
  console.error('ErrorComponent', error);

  return <div>ErrorComponent</div>;
}
