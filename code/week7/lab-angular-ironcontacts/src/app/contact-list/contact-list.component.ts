import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import contacts from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
   let newObj: {} = {
     name:this.newContact.name,
     email:this.newContact.email,
     phoneNumber: this.newContact.phoneNumber,
     image: this.newContact.image
   }
   this.contacts.push(newObj)
   this.newContact.name = ""
   this.newContact.email = ""
   this.newContact.phoneNumber = ""
   this.newContact.image = ""
  }
}
