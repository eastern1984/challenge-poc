import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  job: Job;
  id: string = null;

  constructor(private jobService: ExampleService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.job = new Job();
    if (this.id !== null) {
      this.jobService.getJob(this.id).then((result) => {
        this.job.id = result.id;
        this.job.title = result.title;
        this.job.description = result.description;
      });
    }
  }

  onSubmit(form) {
    this.job.id = form.value.id;
    this.job.title = form.value.title;
    this.job.description = form.value.description;
    if (form.value.id !== null) {
      this.jobService.updateJob(this.job).then((result) => {
        this.job = result;
        this.router.navigate(['job']);
      });
    } else {
      this.jobService.createJob(this.job).then((result) => {
        this.job = result;
        this.router.navigate(['job']);
      });
    }
  }

  ngOnInit() {
  }

}
