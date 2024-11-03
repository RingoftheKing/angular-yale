import {Component, HostListener} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

interface NavItem {
  label: string;
  isDropdownOpen: boolean;
  color?: string;
  fontWeight?: string;
  dropdownOptions?: string[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgForOf,
    NgStyle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})



export class NavbarComponent {
  admissionOptions: string[] = ['Application Windows', 'Tuition Fees', 'Courses']
  aboutOptions: string[] = ['Our Mission', 'Our Students', 'Our Partners']
  exhibitionsOptions: string[] = ['Upcoming Exhibitions', 'Past Exhibitions']
  eventsOptions: string[] = ['Upcoming Events', 'Past Events']
  publicationsOptions: string[] = ['Book series', 'Email publications']
  newsOptions: string[] = ['Press Releases', 'Blog']

  navItems: NavItem[] = [
    { label: 'Admissions', isDropdownOpen: false , fontWeight: 'bold', dropdownOptions: this.admissionOptions},
    { label: 'About', isDropdownOpen: false , dropdownOptions: this.aboutOptions},
    { label: 'Exhibits', isDropdownOpen: false , dropdownOptions: this.exhibitionsOptions},
    { label: 'Events', isDropdownOpen: false , dropdownOptions: this.eventsOptions},
    { label: 'Publications', isDropdownOpen: false , dropdownOptions: this.publicationsOptions},
    { label: 'News', isDropdownOpen: false , dropdownOptions: this.newsOptions},
  ];

  toggleDropdown(item: NavItem) {
    if (item.isDropdownOpen) {
      item.isDropdownOpen = false;
      return;
    }

    this.navItems.forEach(i => (i.isDropdownOpen = false));
    item.isDropdownOpen = !item.isDropdownOpen;
  }

  isProfileDropdownOpen: boolean = false;
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  // Close all dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;

    // Check if the click is inside a dropdown
    const clickedInside = targetElement.closest('.dropdown-item');
    if (!clickedInside) {
      // Close all dropdowns
      this.navItems.forEach(i => (i.isDropdownOpen = false));
    }
  }
}
