import Link from "next/link";
import styled from "styled-components";
import Container from "styles/Container";
import { FaArrowRight } from "react-icons/fa";

const posts = [
  {
    id: "1",
    title: "React JS vs Vue JS. Which one to choose?",
    slug: "react-js-vs-vue-js-which-one-to-choose",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores officia ex sed adipisci vitae aliquam saepe necessitatibus facilis autem esse nulla harum rerum mollitia, magni tempora assumenda voluptas? Laboriosam.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "2",
    title: "Top 20 web development trends of 2021.",
    slug: "top-20-web-development-trends-of-2021.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores officia ex sed adipisci vitae aliquam saepe necessitatibus facilis autem esse nulla harum rerum mollitia, magni tempora assumenda voluptas? Laboriosam.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    title: "10 mistakes to avoid while designing UI and UX.",
    slug: "10-mistakes-to-avoid-while-designing-ui-and-ux.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores officia ex sed adipisci vitae aliquam saepe necessitatibus facilis autem esse nulla harum rerum mollitia, magni tempora assumenda voluptas? Laboriosam.",
    image:
      "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Blog() {
  return (
    <Section>
      <Container>
        <Posts>
          {posts.map(({ id, description, image, title, slug }) => (
            <Post key={id}>
              <div className="cover">
                <img src={image} alt="cover" className="image" />
              </div>
              <div className="body">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <Link href={`/blogs/${slug}`}>
                  <a className="action">
                    <span>Read More</span>
                    <FaArrowRight />
                  </a>
                </Link>
              </div>
            </Post>
          ))}
        </Posts>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Posts = styled.div`
  display: flex;
  row-gap: 50px;
  flex-wrap: wrap;
  column-gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  display: flex;
  flex: 1 0 300px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray.light};

  .body {
    display: flex;
    padding: 0px 36px 32px;
    flex-direction: column;
  }

  .cover {
    height: 200px;
    background-color: black;
  }

  .image {
    width: 100%;
    opacity: 0.8;
    height: 200px;
    object-fit: cover;
  }

  .title {
    font-size: 20px;
    margin-top: 30px;
    font-weight: 500;
    font-family: "Lora", serif;
    color: ${(props) => props.theme.colors.blue.dark};
  }

  .description {
    font-size: 14px;
    font-weight: 300;
    margin-top: 20px;
    color: ${(props) => props.theme.colors.blue.medium};
  }

  .action {
    gap: 10px;
    color: white;
    display: flex;
    font-size: 14px;
    margin-top: 25px;
    font-weight: 600;
    letter-spacing: 1px;
    align-self: flex-start;
    padding: 12px 20px 8px;
    text-transform: uppercase;
    text-decoration-line: none;
    transition: background-color 0.2s ease-in-out;
    background-color: ${(props) => props.theme.colors.orange.dark};

    &:hover {
      background-color: ${(props) => props.theme.colors.blue.dark};
    }
  }
`;
