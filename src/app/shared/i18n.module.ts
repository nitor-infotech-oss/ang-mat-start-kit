import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class I18nModule {}

// use below code if you want to get transalation strings from local folder Assets/i18n
export function translateLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}
// use below code if you want to get transalation strings from API
// export function translateLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(
//     httpClient, `API URL` , ``
//   );
// }
