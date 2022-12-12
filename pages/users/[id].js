// allows Next.js to build a number of pages and their routes based on the data is fetched 'https://jsonplaceholder.typicode.com/users'
export const getStaticPaths = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  // based on the parameters specified, Next.js will build a page & a route for each user based on the fetched data
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false // shows the 404 page if one visit a user id that does not exists.
  }

}


// based on the number of pages Next.js created using the function above, the function below is used to get the data for each individual user
export const getStaticProps = async (context) => {

  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { user: data }
  }

}


const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>

  )
}
export default Details