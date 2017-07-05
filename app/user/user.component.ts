import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html'
})


export class UserComponent implements OnInit {
    model: any = {};
    loading = false;
    users: User[] = [];

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 
    
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
