import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id')); // notice this is route not router lol route is in this function's parameter while router is an injected dependency
      if (isNaN(id) || id < 1) { // this confirms that the id is a number and within the needed range, you can carry out all manner of checks here
        alert('Invalid product Id');
        this.router.navigate(['/products']);
        return false
      }
    return true;
  }
  
}
