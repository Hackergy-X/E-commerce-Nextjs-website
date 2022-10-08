import Image from 'next/image';
import style from '../../styles/singleProduct.module.css';
import Head from 'next/head';

const singleProduct = ({product}) => {
    const {title, price, description, category, image} = product;
    return (
        <div className={style.product + " container "}>
        <Head>
            <title>{title}</title>
        </Head>
            <div>
                <Image src={image} alt="" width="300" height="500" />
            </div>
            <div className={style.ca}>
                <h2 className={style.title}><span className={style.ti}>Title:</span> {title}</h2>
                <h3 className={style.category}><span className={style.ti}>category:</span> {category}</h3>
                <h1 className={style.price}><span className={style.ti}>Price:</span> {price}$</h1>
                <p className={style.description}><span className={style.ti}>Description:</span> {description}</p>
            </div>
        </div>
    )
}

export default singleProduct;

export async function getStaticPaths() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    const paths = products.map((product) => {
        return {
            params: {
                id: product.id.toString(),
            }
        };
    });

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const id = context.params.id;
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    const product = await res.json();

    return {
        props: {
            product
        }
    }
}