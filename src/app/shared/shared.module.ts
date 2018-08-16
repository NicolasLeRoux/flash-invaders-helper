import { NgModule, ModuleWithProviders } from '@angular/core';
import { AccountService } from './services/account.service';
import { FlashesService } from './services/flashes.service';

@NgModule({

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AccountService,
                FlashesService
            ]
        };
    }
}
