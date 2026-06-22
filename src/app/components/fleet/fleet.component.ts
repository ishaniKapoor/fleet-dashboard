import { Component, Input } from '@angular/core';
import { Depot, FleetNode, Region, City } from '../../models/fleet.model';

type BranchNode = Region | City | Depot;

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html'
})
export class FleetComponent {
  @Input() node!: FleetNode;

  isBranch(node: FleetNode): node is BranchNode {
    return 'children' in node && Array.isArray((node as BranchNode).children);
  }

  findNodeById(nodes: FleetNode[], id: string): FleetNode | undefined {
    if (!id || nodes.length === 0) return undefined;

    for (const n of nodes) {
      if (n.id === id) {
        return n;
      }

      if (this.isBranch(n)) {
        const found = this.findNodeById(n.children, id);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }
}
