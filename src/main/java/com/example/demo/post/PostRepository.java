package com.example.demo.post;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PostRepository {
    List<Post> posts;

    public PostRepository() {
        this.posts = new ArrayList<>();
        this.posts.add(new Post(1, "title1", "hello java world1", "1alskdfjasldkjfaslkfdj"));
        this.posts.add(new Post(2, "title2", "hello java world2", "2alskdfjasldkjfaslkfdj"));
        this.posts.add(new Post(3, "title3", "hello java world3", "3alskdfjasldkjfaslkfdj"));
        this.posts.add(new Post(4, "title4", "hello java world4", "4alskdfjasldkjfaslkfdj"));
        this.posts.add(new Post(5, "title5", "hello java world5", "5alskdfjasldkjfaslkfdj"));
    }

    List<Post> findAll(){
        return this.posts;
    }
}
