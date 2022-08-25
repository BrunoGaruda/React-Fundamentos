export function RepositoryItem(props) {
  return (
    <li>
      {/* Sempre que for utilizar uma variável javascript dentro do html tem que usar chaves */}
      <strong>{props.repository}</strong>
      <p>Forms in React</p>
      <a href="#">Acessar repositório</a>
    </li>
  )
}
