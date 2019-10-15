import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { Job } from '../models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs: [Job];

  constructor(private jobService: ExampleService, private router: Router) {
    this.getJobs();
  }

  deleteJob(id) {
    this.jobService.deteteJob(id).then((result) => {
      this.getJobs();
    });
  }

  getJobs() {
    this.jobService.getJobs().then((result) => {
      this.jobs = result.data;
    });
  }

  updateJob(id) {
    this.router.navigate(['update-job/' + id]);
  }

  ngOnInit() {
  }

}
