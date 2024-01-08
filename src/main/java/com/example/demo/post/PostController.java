package com.example.demo.post;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class PostController {
    private final PostService postService;

    PostController(){
        this.postService = new PostService();
    }
    @GetMapping("/csr/json")
    @ResponseBody
    public List<Post> findAll(){
        return postService.findAll();
    }

// 사용자에게 화면 return => template 하위 파일로 접근함.
    @GetMapping("/ssr")
    public String findAllssr(Model model){
        List<Post> posts = postService.findAll();
        model.addAttribute("posts", posts);
        return "post_list";
    }




}
