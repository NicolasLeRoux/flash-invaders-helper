import { NgModule, ModuleWithProviders } from '@angular/core';
import { AccountService } from './services/account.service';

@NgModule({

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AccountService
            ]
        };
    }
}
