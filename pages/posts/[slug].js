import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './[slug].module.css';
import CommentsSection from '../../components/comments-section/comments-section';


let client 
if (
	process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
	process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
) {
	 client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
	});
}

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'blog',
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const { items } = await client.getEntries({
		content_type: 'blog',
		'fields.slug': params.slug,
	});

	return {
		props: { blog: items[0] },
	};
};

function Post({ blog, isLogged, user }) {
	const { title, featuredImage, postContent, slug } = blog.fields;

	const contentfulLoader = ({ src, quality, width }) => {
		const params = [`w=${width}`];

		if (quality) {
			params.push(`q=${quality}`);
		}
		return `${src}?${params.join('&')}`;
	};

	return (
		<section className={styles['blog-post']}>
			<div className={styles.image}>
				<Image
					src={`https:${featuredImage.fields.file.url}`}
					loader={contentfulLoader}
					width={720}
					height={400}
					alt='post image'
				/>
			</div>
			<div className={styles.container}>
				<h2> {title}</h2>
				<div className={styles.content}>
					{documentToReactComponents(postContent)}
				</div>
				<CommentsSection slug={slug} logged={isLogged} user={user} />
			</div>
		</section>
	);
}

export default Post;
