import { Injectable, OnInit } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { Job } from '../models/job.model';


interface JobModel {
  id?: number;
  title: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private jobService;

  constructor(
    private feathers: FeathersService
  ) {
    this.jobService = this.feathers.createService<JobModel>('job');
  }

  public createJob(job: Job) {
    return this.jobService.create(job);
  }

  public getJobs() {
    return this.jobService.find();
  }

  public getJob(id) {
      return this.jobService.get(id);
  }

  public updateJob(job: Job) {
    return this.jobService.patch(job.id, job);
  }

  public deteteJob(id) {
    return this.jobService.remove(id);
  }

  async showExample() {
  const jobService = this.feathers.createService<JobModel>('job');
  const job: JobModel = {title: 'front-end developer', description: 'Wow! This is a description! Surprised?'};

  console.log('%c Job service example', 'font-size:20px;font-weight:bold');

    // CREATE
  const createdJob = await jobService.create(job);
  console.log('Created Job:', createdJob);

    // GET
  const retrievedJob = await jobService.get(createdJob.id);
  console.log('Retrieved Job:', retrievedJob);

    // REMOVE
  await jobService.remove(retrievedJob.id);
  console.log('removed Job with id', retrievedJob.id);


  console.log('%c End job service example', 'font-size:20px;font-weight:bold');
  }
}
