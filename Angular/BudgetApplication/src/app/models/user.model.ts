import { Injectable } from '@angular/core';

export class IUser {
    constructor(
      public firstName: string,
      public lastName: string,
      public age?: number // optional property
    ) {}
  }
  