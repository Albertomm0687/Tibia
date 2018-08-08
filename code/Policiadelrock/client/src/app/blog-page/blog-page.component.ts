import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { BlogListService} from '../services/blog-list.service'
import { BlogService} from '../services/blogs.service'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogs: Array<any>
  characters: Array<any>
  blogList: Array<any> = []
  constructor(
      private router: Router,
      private service: BlogListService,
      private blogService: BlogService
    ){}

  

  showBlogs(blogs){
    console.log(blogs)
  }

  ngOnInit() {
    this.blogService.getAllBlogs()
    .then(blogList=>{
      console.log(blogList)
      this.blogList = blogList
    })

  }


}
