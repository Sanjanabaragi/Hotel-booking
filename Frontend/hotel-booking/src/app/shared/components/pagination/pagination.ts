import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css']
})
export class PaginationComponent {

  // Current active page
  @Input() currentPage: number = 1;

  // Total number of pages
  @Input() totalPages: number = 1;

  // Emit selected page to parent
  @Output() pageChanged =
    new EventEmitter<number>();


  // Go to next page
  nextPage(): void {

    if (this.currentPage < this.totalPages) {

      this.currentPage++;

      this.pageChanged.emit(
        this.currentPage
      );
    }
  }


  // Go to previous page
  previousPage(): void {

    if (this.currentPage > 1) {

      this.currentPage--;

      this.pageChanged.emit(
        this.currentPage
      );
    }
  }


  // Go to selected page
  goToPage(page: number): void {

    if (
      page >= 1 &&
      page <= this.totalPages
    ) {

      this.currentPage = page;

      this.pageChanged.emit(page);
    }
  }
  


  // Generate page numbers
  get pages(): number[] {

    return Array(
      this.totalPages
    ).fill(0).map((x, i) => i + 1);

  }

}