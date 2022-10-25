import Head from 'next/head';
import { apiUrl, apiUrlPost } from '../services/api';
import { NavBar } from '../components/NavBar';
import Postagem from '../components/Postagem';
import { useState, useEffect } from 'react';
import { MainContainer, Container } from './styles';



export default function Home() {

  

  const [posts, setPosts] = useState([]);

  const handlePosts = async () => {
      const retorno = await apiUrl.get(`/posts_v2`);
      setPosts(retorno.data);
  }

  useEffect(() => {
    handlePosts();
  }, []);

  return (
      <>
      <Head>
        <title>Personal Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <MainContainer>
      <NavBar className='navbar' />
      <Container>
      
        {posts.map((item) => {
            return(
              <Postagem 
              title={item.title}
              subtitle={item.subtitle}
              nameauthor={item.nome_author}
              imgauthor={item.foto_author}
              />
            )
        })}
        </Container>
      </MainContainer>
      </>
  )

  
}
