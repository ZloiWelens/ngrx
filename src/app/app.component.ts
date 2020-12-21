import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CountState} from './reducers/count/count.reducer';
import {Observable} from 'rxjs';
import {selectCount, selectUpdate} from './reducers/count/count.selectors';
import {CountClearAction, CountDecreaseAction, CountIncreaseAction} from './reducers/count/count.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number> = this._store$.pipe(select(selectCount));
  public countActive: Observable<boolean> = this.count$.pipe(map(
    value => value <= 0
  ))
  update$: Observable<number> = this._store$.pipe(select(selectUpdate))

  constructor(private _store$: Store<CountState>) {
  }

  increase() {
    this._store$.dispatch(new CountIncreaseAction())
  }

  decrease() {
    this._store$.dispatch(new CountDecreaseAction())
  }

  clear() {
    this._store$.dispatch(new CountClearAction())
  }
}
