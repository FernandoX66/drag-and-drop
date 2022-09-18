import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Tag } from '../models/tag.interface';
import { tags } from '../constants/tags';

@Injectable()
export class TagsService {
  private _tags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>(tags);

  constructor() {}

  get tags(): Tag[] {
    return this._tags.value;
  }

  set tags(tags: Tag[]) {
    this._tags.next(tags);
  }
}
