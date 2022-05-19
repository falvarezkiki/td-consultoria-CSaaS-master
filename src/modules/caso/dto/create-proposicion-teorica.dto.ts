import { ApiProperty } from "@nestjs/swagger";

export class CreateProposicionTeoricaDto {
    @ApiProperty()
    nombre: string;
}