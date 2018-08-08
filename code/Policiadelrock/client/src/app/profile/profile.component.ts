import { Component, OnInit } from '@angular/core';
import { BlogService} from '../services/blogs.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  blogs: any = {}

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveBlog(){
    this.blogs.specs = this.blogs.genders.split(',')
    this.blogService.createBlog(this.blogs)
    .subscribe(p=>{
      this.router.navigate(['blog-page'])
    })
  }

}
