import { Component, OnInit } from '@angular/core';
import { Post } from '../Models';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  etudiants:string[]=[];
  mesPosts:Post[];
  nom:string="mon composant";
  constructor(private serviceUser: UsersService, private servicePosts:PostsService) {

   }

  ngOnInit(): void {

    this.etudiants = this.serviceUser.getStudent();
    this.servicePosts.getPosts().subscribe(
    data => {
       // console.log(data);
       this.mesPosts = data;
      }
    );

  }

}
