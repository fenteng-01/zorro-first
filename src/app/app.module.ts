import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TypographyTitleComponent } from './typography-title/typography-title.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TypographyInteractiveComponent } from './typography-interactive/typography-interactive.component';
import { TypographyTextComponent } from './typography-text/typography-text.component';
import { TypographyEllipsisComponent } from './typography-ellipsis/typography-ellipsis.component';
import { TypographySuffixComponent } from './typography-suffix/typography-suffix.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { DividerHorizontalComponent } from './divider-horizontal/divider-horizontal.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { DividerOrientationComponent } from './divider-orientation/divider-orientation.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TypographyTitleComponent,
    TypographyInteractiveComponent,
    TypographyTextComponent,
    TypographyEllipsisComponent,
    TypographySuffixComponent,
    DividerHorizontalComponent,
    DividerOrientationComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzRadioModule,
    NzDropDownModule,
    NzIconModule,
    NzTypographyModule,
    NzSliderModule,
    NzDividerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
