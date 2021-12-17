import React, { useState, useEffect } from 'react';

export default function AllPosts() {
    const [posts, setPosts] = useState({
        loading: false,
        data: [],
    });
    useEffect(() => {
        setPosts({ loading: true });
        let postData = fetch('/wp-json/wp/v2/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts({
                    loading: false,
                    data: data,
                });
            })
            .catch((err) => console.log(err));

        return postData;
    }, []);
    return (
        <div>
            {posts.loading
                ? 'loading'
                : posts.data.map((post, index) => {
                      console.log(post);
                      return (
                          <div key={index}>
                              <h2>
                                  <a href={post.link}>{post.title.rendered}</a>
                              </h2>
                          </div>
                      );
                  })}
        </div>
    );
}
