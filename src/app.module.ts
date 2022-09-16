import { AppModule } from './AppModule';
import { AppService } from '/AppService';
import { AppController } from '/AppController';


@Moudule({
  providers: [AppService],
  controllers: [AppController],
  exports: [AppModule],
})
export class AppModule{}