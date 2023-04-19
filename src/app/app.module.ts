import { NgModule                           } from '@angular/core';
import { BrowserModule                      } from '@angular/platform-browser';
import { AppComponent                       } from './app.component';
import { HeaderComponent                    } from './pages/header/header.component';
import { FooterComponent                    } from './pages/footer/footer.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import {ReactiveFormsModule, FormsModule    } from '@angular/forms';
import { HttpClientModule                   } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
