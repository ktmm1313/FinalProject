import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NestFactory } from '@nestjs/core'; // ADDED 3/20 1PM
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} 

async function bootstrap() { //ADDED 3/20 1 PM
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));