import express from 'express';
import loginRouter from './Login/login.router';
import teamsRouter from './Teams/teams.router';
import matchesRouter from './Matches/matches.router';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use('/login', loginRouter);
    this.app.use('/teams', teamsRouter);
    this.app.use('/matches', matchesRouter);
  }
}

const { app } = new App();

export default app;
