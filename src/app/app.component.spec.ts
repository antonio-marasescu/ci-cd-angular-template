import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({ component: AppComponent, imports: [AppModule] });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
