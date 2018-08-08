import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class BlogService{
    //url = "http://localhost:3000/blog/" //<-----------checar esto
    url = "/blog/"
    constructor(private http:Http){}

    getAllBlogs(){
        return this.http.get(this.url).toPromise()
        .then((res: Response)=> res.json())
        .catch(e=>console.log(e))                        
    }
   
    getOneBlog(id){
        return this.http.get(this.url + id)
            .pipe(map((res: Response)=>res.json()));                                
    }

    createBlog(obj){
        return this.http.post(this.url, obj)
            .pipe(map((res: Response)=>res.json()))                                                             
    }    
        
    editOneBlog(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
    }    

    deleteBlog(id){
        return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                


    }    
    

}