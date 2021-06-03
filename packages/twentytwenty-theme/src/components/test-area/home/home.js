import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { getPostsGroupedByCategory, createMarkupObject, getRandomColor } from '../../helpers'

import Link from '../link'

const Home = ({ state, actions }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = state.source

  useEffect(() => {
    const attachExtraDataToState = async () => {
    //console.log(state.router.link)
    //console.log('getting data from useEffect...')
      await Promise.all(
        Object.values(categoriesWidgetsHome)
          .map(category => actions.source.fetch(`/category/${category}/`))
      )
    }
    attachExtraDataToState()
  });
//console.log(state.source.get("/category/works").items)
  return (
    <>
      <div>
        <div>
        {/*
          data.map(({ posts, category }, index) => (
            <div key={index}>
              <p fontSize={50} p={3} bg='#000' color="#FFF" as='h2'>{category.name}</p>
                {posts.map((post, index) => (
                  <div key={index}>
                    <div >
                      <div
                        p={1}
                        borderRadius={2}
                        boxShadow='0 0 16px rgba(0, 0, 0, .25)'>

                        <div px={2}>
                          <Link href={post.link}>
                            <p as='h3' dangerouslySetInnerHTML={createMarkupObject(post.title.rendered)}  />
                          </Link>
                          <p dangerouslySetInnerHTML={createMarkupObject(post.excerpt.rendered)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                <Link href={category.link}>
                  <Text >&gt;&gt; See more posts at <strong>{category.name}</strong></Text>
                </Link>
            </div>
          ))
        */}
        </div>
        <div>
            <p>Sidebar</p>
        </div>
      </div>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
`

const BoxCategory = styled.div`
  border-radius: 5px;
  padding: 20px;
  border: 4px solid ${getRandomColor};
`

const Sidebar = styled.aside`
  border: 4px solid red;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  width: 300px;
`

const categoriesWidgetsHome = {
  14: "works",
  28: "recent",
}


export default connect(Home);
