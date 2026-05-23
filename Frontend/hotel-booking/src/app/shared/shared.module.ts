import { NgModule } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterModule }
from '@angular/router';


// COMPONENTS
import { NavbarComponent }
from './components/navbar/navbar';

import { FooterComponent }
from './components/footer/footer';

import { LoaderComponent }
from './components/loader/loader';

import { PaginationComponent }
from './components/pagination/pagination';

import { ModalComponent }
from './components/modal/modal';

import { ConfirmationDialogComponent }
from './components/confirmation-dialog/confirmation-dialog';


// DIRECTIVES
import { HighlightDirective }
from './directives/highlight';

import { DisableButtonDirective }
from './directives/disable-button';

import { NumberOnlyDirective }
from './directives/number-only';

import { UppercaseDirective }
from './directives/uppercase';


// PIPES
import { TruncatePipe }
from './pipes/truncate-pipe';

import { BookingStatusPipe }
from './pipes/booking-status-pipe';

import { GuestCountPipe }
from './pipes/guest-count-pipe';

import { PriceFormatPipe }
from './pipes/price-format-pipe';


@NgModule({

  declarations: [

    // Components
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    PaginationComponent,
    ModalComponent,
    ConfirmationDialogComponent,

    // Directives
    HighlightDirective,
    DisableButtonDirective,
    NumberOnlyDirective,
    UppercaseDirective,

    // Pipes
    TruncatePipe,
    BookingStatusPipe,
    GuestCountPipe,
    PriceFormatPipe

  ],

  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [

    // Components
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    PaginationComponent,
    ModalComponent,
    ConfirmationDialogComponent,

    // Directives
    HighlightDirective,
    DisableButtonDirective,
    NumberOnlyDirective,
    UppercaseDirective,

    // Pipes
    TruncatePipe,
    BookingStatusPipe,
    GuestCountPipe,
    PriceFormatPipe

  ]

})

export class SharedModule {}