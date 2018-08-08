import { Component, OnInit } from '@angular/core';
import { BlogService} from '../services/blogs.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id: any = ""
  blog:any = {}
  constructor(
    private blogService: BlogService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      
      
      this.blogService.getOneBlog(params.id)
      .subscribe(blog=>{
        console.log(blog)
        this.blog=blog
      })
    })
  }
}
