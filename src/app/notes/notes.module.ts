import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ScrollingModule } from '@angular/cdk/scrolling';

// material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

// containers
import { NotesDashboardComponent } from './containers/notes-dashboard/notes-dashboard.component';
import { NotesUserComponent } from './containers/notes-user/notes-user.component';
import { NotesPublicComponent } from './containers/notes-public/notes-public.component';
import { NotesSharedComponent } from './containers/notes-shared/notes-shared.component';
import { NotesHandlerComponent } from './containers/notes-handler/notes-handler.component';

// components
import { NotesViewComponent } from './components/notes-view/notes-view.component';
import { NotesContentComponent } from './components/notes-content/notes-content.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  {
    path: '', component: NotesDashboardComponent,
    children: [
      { path: 'note/:id', component: NotesHandlerComponent }
    ]
  },
];

@NgModule({
  declarations: [
    NotesViewComponent,
    NotesContentComponent,
    NotesDashboardComponent,
    NotesUserComponent,
    NotesPublicComponent,
    NotesSharedComponent,
    NotesHandlerComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule,
    FlexLayoutModule,
    ScrollingModule,
    FormsModule,
    // material
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class NotesModule { }
