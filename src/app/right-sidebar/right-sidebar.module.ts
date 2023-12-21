import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RightSidebarComponent } from './right-sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ RightSidebarComponent ],
    exports: [ RightSidebarComponent ]
})

export class RightSidebarModule {}
