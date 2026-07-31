import { Component, computed, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/icon/icon';
import { BRANCHES, Branch } from '../../core/data/branches';

interface BranchWithMap extends Branch {
  mapUrl: SafeResourceUrl;
  directionsUrl: string;
}

const ALL_TYPES = 'All';

function cleanCity(city: string): string {
  return city
    .replace(/^.*—\s*/, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
}

@Component({
  selector: 'app-branches',
  imports: [IconComponent, FormsModule],
  templateUrl: './branches.html',
})
export class BranchesComponent {
  protected readonly branches: BranchWithMap[];
  protected readonly branchTypes: string[];

  protected readonly searchQuery = signal('');
  protected readonly selectedType = signal(ALL_TYPES);

  protected readonly filteredBranches = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const type = this.selectedType();

    return this.branches.filter((branch) => {
      const matchesType = type === ALL_TYPES || branch.type === type;
      const matchesQuery =
        !query ||
        branch.city.toLowerCase().includes(query) ||
        branch.address.toLowerCase().includes(query) ||
        branch.contact.toLowerCase().includes(query);
      return matchesType && matchesQuery;
    });
  });

  constructor(sanitizer: DomSanitizer) {
    this.branches = BRANCHES.map((branch) => {
      const query = `${branch.address}, ${cleanCity(branch.city)}, India`;
      const encodedQuery = encodeURIComponent(query);
      return {
        ...branch,
        mapUrl: sanitizer.bypassSecurityTrustResourceUrl(
          `https://maps.google.com/maps?q=${encodedQuery}&z=13&output=embed`,
        ),
        directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}`,
      };
    });

    this.branchTypes = [ALL_TYPES, ...new Set(BRANCHES.map((branch) => branch.type))];
  }

  protected setType(type: string): void {
    this.selectedType.set(type);
  }

  protected telHref(phone: string): string {
    return `tel:${phone.replace(/\s+/g, '')}`;
  }
}
