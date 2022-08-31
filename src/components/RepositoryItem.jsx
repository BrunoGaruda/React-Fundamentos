export function RepositoryItem(props) {
  return (
    <li>
      {/* Sempre que for utilizar uma variável javascript dentro do html tem que usar chaves */}
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  )
}
