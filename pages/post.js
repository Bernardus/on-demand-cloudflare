// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
    return (
      <ul>
        <div>{ date } </div>
       { JSON.stringify(posts)}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const posts = await res.json()
    const date = new Date().toISOString()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
        date
      },
    }
  }
  
  export default Blog