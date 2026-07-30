import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconComponent } from '../../shared/icon/icon';
import { BRANCHES, Branch } from '../../core/data/branches';

interface BranchWithMap extends Branch {
  mapUrl: SafeResourceUrl;
  directionsUrl: string;
}

function cleanCity(city: string): string {
  return city
    .replace(/^.*—\s*/, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
}

@Component({
  selector: 'app-branches',
  imports: [IconComponent],
  templateUrl: './branches.html',
})
export class BranchesComponent {
  protected readonly branches: BranchWithMap[];

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
  }
}
