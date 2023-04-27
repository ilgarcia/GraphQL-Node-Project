import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointments-input";
import { Appointment } from "../dtos/models/appontemnt-model";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World";
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }
}
