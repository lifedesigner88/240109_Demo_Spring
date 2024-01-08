package com.example.demo.post;

import java.util.List;

public class PostService {

   private final PostRepository postRepository;

    public PostService() {
        this.postRepository = new PostRepository();
    }
    List<Post> findAll(){
        return postRepository.findAll();
    }
}
