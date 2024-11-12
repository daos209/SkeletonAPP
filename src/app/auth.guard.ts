import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbTaskService } from './services/db-task.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dbTaskService: DbTaskService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const isActive = await this.dbTaskService.checkActiveSession();
    if (isActive) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}