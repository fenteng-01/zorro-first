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
import { ButtonSizeComponent } from './button-size/button-size.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { DisabledComponent } from './disabled/disabled.component';
import { ButtonButtonGroupComponent } from './button-button-group/button-button-group.component';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { ButtonMultipleComponent } from './button-multiple/button-multiple.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ButtonGhostComponent } from './button-ghost/button-ghost.component';
import { ButtonBlockComponent } from './button-block/button-block.component';
import { ButtonDangerComponent } from './button-danger/button-danger.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TestComponentComponent } from './test-component/test-component.component';
import { IconBasicComponent } from './icon-basic/icon-basic.component';
import { IconCustomComponent } from './icon-custom/icon-custom.component';
import { IconIconfontComponent } from './icon-iconfont/icon-iconfont.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ButtonSizeComponent,
    DisabledComponent,
    ButtonButtonGroupComponent,
    ButtonLoadingComponent,
    ButtonMultipleComponent,
    ButtonGhostComponent,
    ButtonBlockComponent,
    ButtonDangerComponent,
    TestComponentComponent,
    IconBasicComponent,
    IconCustomComponent,
    IconIconfontComponent,
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
    NzIconModule 
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
