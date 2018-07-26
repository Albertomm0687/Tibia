![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# PP | IronContacts

## Introduction

Over here at Ironlabs, we have found that students like to have a way to keep track of the contacts they make during their Ironhack experience, for future projects, and to reminisce about old times.

We are going to create a contact management app with Angular.

You can find the starter code in the starter code folder of this GitHub repo.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- You must submit the entire angular app

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a pull request from your master branch to the original repository master branch.

In the pull request name, add your name and last names separated by a dash "-"

## Instructions

### Iteration 1 | Display Contacts

Let's take a look at the starter code.

There is a file with fake contacts, and the collection of contacts is being exposed to the template in a variable called `contacts`.

Using `*ngFor`, display the `name`, `email`, `phoneNumber`, and `image` of each contact.

### Iteration 2 | Add New Contacts

Currently, there's a form wired up to an `[(ngModel)]` called `newContact`.

When a user clicks the button below this form, it's *supposed* to be calling a function called `addContact`.

Look carefully at the following line and see if you can detect the bug:

```html
<!-- contact-list.component.html -->
<button (click)="addContact">Submit New Contact</button>
```

Then, finish the function inside of the component that adds the contact to the list of contacts:

```typescript
addContact(){
  // add contact to contacts list
  // clear inputs
}
```

### Iteration 3 | Styling

Unfortunately, our contacts list isn't really production ready. It doesn't have much styling yet.

Remember the rules when styling. You can add a global stylesheet in your `index.html`, and apply component specific styles in the `.component.css` files.
