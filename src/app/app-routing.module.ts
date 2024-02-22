import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

const routes: Routes = [{path:'contacts',component: ContactHomeComponent},
                        {path:'contact/new',component: ContactNewComponent},
                        {path:'contact/:id',component: ContactDetailComponent},
                        {path:'contact/edit/:id',component: ContactUpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
