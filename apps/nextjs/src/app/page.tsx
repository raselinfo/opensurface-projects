const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog/post");
  return await res.json();
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <h1>Home page</h1>
      {posts.map((post:any) => {
        return <h4 key={post.id}>{post.title}</h4>;
      })}
    </>
  );
}
