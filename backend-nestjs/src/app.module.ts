import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StateModule } from './state/state.module';
import { ConstituencyModule } from './constituency/constituency.module';
import { PartyModule } from './party/party.module';
import { CandidateModule } from './candidate/candidate.module';
import { ElectionResultsModule } from './election-results/election-results.module';

@Module({
  imports: [StateModule, ConstituencyModule, PartyModule, CandidateModule, ElectionResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
