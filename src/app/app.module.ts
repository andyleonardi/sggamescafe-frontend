// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

// Services import
import { AuthChecker } from './services/login-and-auth/auth-checker.service';

// Components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamePageComponent } from './game-page/game-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { BorrowPageComponent } from './borrow-page/borrow-page.component';
import { ReturnPageComponent } from './return-page/return-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { CheckoutStatsComponent } from './checkout-stats/checkout-stats.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { TableFiltersComponent } from './table-filters/table-filters.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { AdminEditGamesComponent } from './admin-edit-games/admin-edit-games.component';
import { AdminAddGameComponent } from './admin-add-game/admin-add-game.component';
import { AdminAddGameFormComponent } from './admin-add-game-form/admin-add-game-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    GamesListComponent,
    GamePageComponent,
    FormPageComponent,
    BorrowPageComponent,
    ReturnPageComponent,
    AdminLoginComponent,
    AdminSettingsComponent,
    CheckoutStatsComponent,
    TableDisplayComponent,
    TableFiltersComponent,
    PasswordFormComponent,
    AdminEditGamesComponent,
    AdminAddGameComponent,
    AdminAddGameFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'games', component: GamesListComponent },
      { path: 'games/:id', component: GamePageComponent },
      { path: 'form/:formType', component: FormPageComponent },
      { path: 'borrowed/:id', component: BorrowPageComponent },
      { path: 'returned/:id', component: ReturnPageComponent },
      // Admin paths
      { path: 'admin/login', component: AdminLoginComponent },
      { path: 'admin/settings', component: AdminSettingsComponent, canActivate: [AuthChecker] },
      { path: 'admin/stats', component: CheckoutStatsComponent, canActivate: [AuthChecker] },
      { path: 'admin/password', component: PasswordFormComponent, canActivate: [AuthChecker] },
      { path: 'admin/addgame', component: AdminAddGameComponent },
      { path: 'games/:id/edit', component: AdminEditGamesComponent, canActivate: [AuthChecker] },     
      // Test paths
      { path: 'test', component: TableDisplayComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
