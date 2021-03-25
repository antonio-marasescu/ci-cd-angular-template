import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WidgetService } from './services/widget.service';
import { WidgetPageComponent } from './components/widget-page/widget-page.component';
import { StoreModule } from '@ngrx/store';
import { reducer as widgetReducer, WIDGET_FEATURE_NAME } from './state/widget.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WidgetEffects } from './state/widget.effects';
import { WidgetRoutingModule } from './widget-routing.module';

@NgModule({
  declarations: [WidgetPageComponent],
  imports: [
    SharedModule,
    WidgetRoutingModule,
    StoreModule.forFeature(WIDGET_FEATURE_NAME, widgetReducer),
    EffectsModule.forFeature([WidgetEffects]),
  ],
  providers: [WidgetService, WidgetEffects],
})
export class WidgetModule {}
