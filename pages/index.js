import Products from "../components/Products";
import Head from 'next/head';

const index = ({products}) => {
  return (
    <main className="container">
      <Head>
      <title>Home | The Best ecommerce website</title>
      </Head>
      <div className="main">
        {
          products.map(product => <Products key={product.id} product={product} />)
        }
      </div>
    </main>
  )
}



export default index;

export async function getStaticProps(){
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}