import { Module } from '@nestjs/common';
import { EventsGetWay } from './events.gateway';

@Module({
    imports: [EventsGetWay]
})
export class EventsModule { }
