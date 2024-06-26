import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AllBackComponent} from "./Back/all-back/all-back.component";
import {HomebackComponent} from "./Back/homeback/homeback.component";
import {UsersComponent} from "./Back/users/users.component";
import {TablesComponent} from "./Back/tables/tables.component";
import {EventsComponent} from "./Back/events/events.component";
import {InscriptionsComponent} from "./Back/inscriptions/inscriptions.component";
import {PostsComponent} from "./Back/posts/posts.component";
import {CommentsComponent} from "./Back/comments/comments.component";
import {RendezvousComponent} from "./Back/rendezvous/rendezvous.component";
import {GroupesComponent} from "./Back/groupes/groupes.component";
import {CategoriesGroupeComponent} from "./Back/categories-groupe/categories-groupe.component";
import {MessagesComponent} from "./Back/messages/messages.component";
import {AllFrontComponent} from "./Front/all-front/all-front.component";
import {HomeComponent} from "./Front/home/home.component";
import {BlogComponent} from "./Front/blog/blog.component";
import {BlogDetailsComponent} from "./Front/blog-details/blog-details.component";
import {RendezvousFrontComponent} from "./Front/rendezvous-front/rendezvous-front.component";
import {AboutComponent} from "./Front/about/about.component";
import {ContactComponent} from "./Front/contact/contact.component";
import {AddRendezVousComponent}  from "./Crud/add-rendez-vous/add-rendez-vous.component";
import {ListRendezvousComponent} from "./Crud/list-rendezvous/list-rendezvous.component";
import {UpdateRendezVousComponent} from "./Crud/update-rendez-vous/update-rendez-vous.component";
import {AddFeedbackComponent} from "./Crud/add-feedback/add-feedback.component";
import {ListRendezVousBackComponent} from "./Crud/list-rendez-vous-back/list-rendez-vous-back.component";
import {UpdateRendezVousBackComponent} from "./Crud/update-rendez-vous-back/update-rendez-vous-back.component";
import {
  ListFeedbackParRendezVousComponent
} from "./Crud/list-feedback-par-rendez-vous/list-feedback-par-rendez-vous.component";


import { EventComponent } from './event/event.component';
import { FronteventComponent } from './Front/frontevent/frontevent.component';

import {SignInComponent} from "./Authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./Authentication/sign-up/sign-up.component";
import {ProfileComponent} from "./Back/profile/profile.component";
import {ForgotPasswordComponent} from "./Authentication/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./Authentication/reset-password/reset-password.component";
import {RegistrationStatsComponent} from "./Back/registration-stats/registration-stats.component";
import { GroupeComponent } from './Front/groupe/groupe.component';
import { GroupeChatComponent } from './Front/groupe-chat/groupe-chat.component';
import { CategorieComponent } from './Back/categorie/categorie.component';
import { MessageComponent } from './Back/message/message.component';
import { GroupesBackComponent } from './Back/groupes-back/groupes-back.component';
import {AddPostComponent} from "./crud/add-post/add-post.component";
import {ListPostsComponent} from "./crud/list-posts/list-posts.component";
import {UpdatePostComponent} from "./crud/update-post/update-post.component";




const routes: Routes = [




  { path: "",

    component: AllFrontComponent,
    children:[

      {
        path: "home",
        component: HomeComponent
      },
      {

        path: "blog",
        component: AddPostComponent
      },

{        path: "groupe",
        component: GroupeComponent
      },
      {
        path: "blogdetails",
        component: BlogDetailsComponent
      },
      {
        path: "rendezvousfront",
        component: ListRendezvousComponent
      },
      {
        path: "add-rendeVous",
        component: AddRendezVousComponent
      },
      {
        path: "update-rendeVous/:idRdv",
        component:  UpdateRendezVousComponent
      },
      {
        path: "add-feedback/:idRdv",
        component: AddFeedbackComponent

      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {

        path: "AddPost",
        component: AddPostComponent
      },
      {
        path: "ListPosts",
        component: ListPostsComponent
      },
      {
        path: 'blog-details/:postId',
        component: BlogDetailsComponent
      },
      {
        path: 'update-post/:idPost',
        component: UpdatePostComponent
      },


{
        path: "Event",
        component: FronteventComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      { path: 'groupesChat/:id',
      component: GroupeChatComponent },


    ]
  },
  {
    path: "admin",
    component: AllBackComponent,
    children: [
      {
        path: "dashboard",
        component: HomebackComponent
      },
      {

        path:"ShowEvent",
        component:EventComponent
      },
      {

        path: "users",
        component: UsersComponent
      },
      {
        path: "tables",
        component: TablesComponent
      },
      {
        path: "events",
        component: EventsComponent
      },

      {
        path: "inscriptions",
        component: InscriptionsComponent
      },
      {
        path: "posts",
        component: PostsComponent
      },
      {
        path: "comments",
        component: CommentsComponent
      },
      {
        path: "rendezvous",


        component: ListRendezVousBackComponent
      },
      {
        path: "update-rendez-vous-Back/:idRdv",
        component: UpdateRendezVousBackComponent
      },
      {
        path: "List-Feedback-Rendezvous/:idRdv",
        component: ListFeedbackParRendezVousComponent


      },
      {
        path: "groupes",
        component: GroupesComponent
      },
      {
        path: "categoriegroupes",
        component: CategoriesGroupeComponent
      },
      {
        path: "messages",
        component: MessagesComponent


      },
      {
        path: "statsRegistration",
        component: RegistrationStatsComponent
      },
      {
        path: "categorie",
        component: CategorieComponent
      },
      {
        path: "message",
        component: MessageComponent
      },
      {
        path: "groupesBack",
        component: GroupesBackComponent

      }
    ]
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "forgotpassword",
    component: ForgotPasswordComponent
  },
  { path: 'reset-password',
    component: ResetPasswordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
